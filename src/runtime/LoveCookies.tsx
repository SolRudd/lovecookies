import React from "react";
import { createRoot, type Root } from "react-dom/client";
import App from "../App";
import { sendConsentToEndpoint } from "../core/api";
import { enforceBlocking } from "../core/blocker";
import { DEFAULT_CATEGORIES, withServiceCategories } from "../core/categories";
import { syncConsentMode } from "../core/consentMode";
import { EventHub } from "../core/events";
import { clearStoredConsent, loadConsent, persistConsent } from "../core/store";
import { registry } from "../core/services";
import type {
  ConsentCategoryDefinition,
  ConsentSnapshot,
  ConsentState,
  ConsentUpdateSource,
  LoveCookiesEventMap,
  LoveCookiesInitOptions,
  LoveCookiesPublicAPI,
  ResolvedLoveCookiesOptions,
  SaveConsentOptions,
} from "../types";

const DEFAULT_OPTIONS: ResolvedLoveCookiesOptions = {
  policyUrl: "/privacy-policy",
  position: "bottom-center",
  accentColor: "#00c471",
  accentSecondary: "#ff477e",
  fontFamily:
    "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  borderRadius: "16px",
  autoShow: true,
};

export interface BannerBridge {
  getOptions(): ResolvedLoveCookiesOptions;
  getCategories(): ConsentCategoryDefinition[];
  getSnapshot(): ConsentSnapshot;
  saveConsent(consent: ConsentState, source: ConsentUpdateSource): void;
  isOpen(): boolean;
  requestClose(): void;
  on<K extends keyof LoveCookiesEventMap>(
    event: K,
    callback: LoveCookiesEventMap[K]
  ): () => void;
}

export class LoveCookiesSDK
  extends EventHub<LoveCookiesEventMap>
  implements LoveCookiesPublicAPI
{
  private initialized = false;
  private options: ResolvedLoveCookiesOptions = { ...DEFAULT_OPTIONS };
  private categories: ConsentCategoryDefinition[] = [...DEFAULT_CATEGORIES];
  private snapshot: ConsentSnapshot = {
    categories: this.createCategoryState(),
    timestamp: null,
    hasConsent: false,
    version: 1,
  };
  private root?: Root;
  private host?: HTMLElement;
  private siteId?: string;
  private consentEndpoint?: string;
  private customHost?: HTMLElement;
  private pendingBannerOpen = false;
  private bannerOpen = false;
  private mountScheduled = false;

  init(options: LoveCookiesInitOptions = {}) {
    if (typeof window === "undefined") return;

    this.resolveOptions(options);

    if (!this.initialized) {
      this.snapshot = loadConsent(this.createCategoryState());
    } else {
      this.snapshot = {
        ...this.snapshot,
        categories: {
          ...this.createCategoryState(),
          ...this.snapshot.categories,
        },
      };
    }

    this.mountWhenReady();
    enforceBlocking((target) => this.canRun(target));
    this.emit("init", this.snapshot);
    this.initialized = true;

    if (!this.snapshot.hasConsent && this.options.autoShow) {
      this.openBanner();
    }
  }

  getConsentStatus(): ConsentSnapshot {
    return this.snapshot;
  }

  saveConsent(
    consent: ConsentState,
    options: SaveConsentOptions | ConsentUpdateSource = {}
  ): ConsentSnapshot {
    const normalizedOptions =
      typeof options === "string" ? { source: options } : options ?? {};
    const normalized = this.normalizeConsent(consent);
    const source: ConsentUpdateSource =
      normalizedOptions.source ?? "unknown";

    if (typeof window !== "undefined") {
      this.snapshot = persistConsent(normalized);
      enforceBlocking((target) => this.canRun(target));
      syncConsentMode(normalized);
      if (this.consentEndpoint) {
        void sendConsentToEndpoint(this.consentEndpoint, {
          consent: normalized,
          timestamp: this.snapshot.timestamp ?? Date.now(),
          siteId: this.siteId,
          source,
        });
      }
    } else {
      this.snapshot = {
        categories: normalized,
        timestamp: Date.now(),
        hasConsent: true,
        version: 1,
      };
    }

    this.emit("consent:changed", this.snapshot, { source });
    this.closeBanner();
    return this.snapshot;
  }

  openBanner(): void {
    if (typeof window === "undefined") return;
    this.bannerOpen = true;

    if (!this.root) {
      this.pendingBannerOpen = true;
      this.mountWhenReady();
      return;
    }

    this.pendingBannerOpen = false;
    this.emit("ui:open");
    this.emit("banner:opened");
  }

  clearConsent(): void {
    if (typeof window !== "undefined") {
      this.snapshot = clearStoredConsent(this.createCategoryState());
      enforceBlocking((target) => this.canRun(target));
      syncConsentMode(this.snapshot.categories);
    } else {
      this.snapshot = {
        categories: this.createCategoryState(),
        timestamp: null,
        hasConsent: false,
        version: 1,
      };
    }
    this.openBanner();
  }

  canRun(categoryOrServiceId: string): boolean {
    const resolved =
      registry.categoryFor(categoryOrServiceId) ??
      categoryOrServiceId.toLowerCase();
    const match = this.snapshot.categories[resolved];
    return Boolean(match);
  }

  getConsentCategories(): ConsentCategoryDefinition[] {
    return this.categories;
  }

  private isBannerOpen() {
    return this.bannerOpen;
  }

  on<K extends keyof LoveCookiesEventMap>(
    eventName: K,
    callback: LoveCookiesEventMap[K]
  ): () => void {
    return super.on(eventName, callback);
  }

  private closeBanner() {
    this.bannerOpen = false;
    this.pendingBannerOpen = false;
    this.emit("ui:close");
    this.emit("banner:closed");
  }

  private resolveOptions(options: LoveCookiesInitOptions) {
    const { host, siteId, consentEndpoint, categories, ...appearance } = options;
    this.options = {
      ...this.options,
      ...filterUndefined(appearance),
    };
    this.siteId = siteId ?? this.siteId;
    this.consentEndpoint = consentEndpoint ?? this.consentEndpoint;
    if (host) {
      this.customHost = host;
    }
    const merged = withServiceCategories(
      DEFAULT_CATEGORIES,
      registry.listCategories()
    );
    const overrideMap = new Map((categories ?? []).map((cat) => [cat.id, cat]));
    this.categories = merged.map((cat) =>
      overrideMap.has(cat.id) ? { ...cat, ...overrideMap.get(cat.id) } : cat
    );
    overrideMap.forEach((cat, id) => {
      if (!this.categories.some((existing) => existing.id === id)) {
        this.categories.push(cat);
      }
    });
    this.snapshot = {
      ...this.snapshot,
      categories: {
        ...this.createCategoryState(),
        ...this.snapshot.categories,
      },
      hasConsent: this.snapshot.hasConsent,
    };
  }

  private createCategoryState(): ConsentState {
    const state: ConsentState = {};
    this.categories.forEach((category) => {
      const required = category.required ?? category.id === "essential";
      state[category.id] = required ? true : false;
    });
    return state;
  }

  private normalizeConsent(partial: ConsentState): ConsentState {
    const base = this.createCategoryState();
    Object.entries(partial).forEach(([category, value]) => {
      base[category] = Boolean(value);
    });
    // ensure required categories remain true
    this.categories.forEach((category) => {
      if (category.required) {
        base[category.id] = true;
      }
    });
    return base;
  }

  private mountWhenReady() {
    if (typeof document === "undefined") return;
    if (this.root) {
      this.renderApp();
      return;
    }
    if (this.mountScheduled) return;
    this.mountScheduled = true;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.mountApp(), {
        once: true,
      });
    } else {
      this.mountApp();
    }
  }

  private mountApp() {
    if (typeof document === "undefined") return;
    this.mountScheduled = false;
    if (this.root) {
      this.renderApp();
      return;
    }

    const container = this.customHost ?? this.createHost();
    this.host = container;
    this.root = createRoot(container);
    this.renderApp();
  }

  private renderApp() {
    if (!this.root) return;
    this.root.render(<App bridge={this.createBridge()} />);
    if (this.pendingBannerOpen) {
      this.pendingBannerOpen = false;
      this.emit("ui:open");
      this.emit("banner:opened");
    }
  }

  private createBridge(): BannerBridge {
    return {
      getOptions: () => this.options,
      getCategories: () => this.categories,
      getSnapshot: () => this.snapshot,
      saveConsent: (consent, source) => {
        this.saveConsent(consent, source);
      },
      isOpen: () => this.isBannerOpen(),
      requestClose: () => this.closeBanner(),
      on: (event, callback) => this.on(event, callback),
    };
  }

  private createHost() {
    const host = document.createElement("div");
    host.id = "lovecookies-root";
    host.style.position = "fixed";
    host.style.bottom = "16px";
    host.style.left = "0";
    host.style.right = "0";
    host.style.zIndex = "2147483647";
    host.style.pointerEvents = "none";
    host.style.display = "flex";
    host.style.justifyContent =
      this.options.position === "bottom-left"
        ? "flex-start"
        : this.options.position === "bottom-right"
        ? "flex-end"
        : "center";
    host.style.padding = "0 16px";
    document.body.appendChild(host);
    return host;
  }
}

export function createLoveCookiesSDK() {
  return new LoveCookiesSDK();
}

function filterUndefined<T extends Record<string, unknown>>(options: T): T {
  const filtered: Record<string, unknown> = {};
  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined) {
      filtered[key] = value;
    }
  });
  return filtered as T;
}
