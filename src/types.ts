export type Position = "bottom-left" | "bottom-right" | "bottom-center";

export interface ConsentCategoryDefinition {
  id: string;
  label: string;
  description: string;
  required?: boolean;
}

export type ConsentState = Record<string, boolean>;

export interface ConsentSnapshot {
  categories: ConsentState;
  timestamp: number | null;
  hasConsent: boolean;
  version: number;
}

export type ConsentUpdateSource =
  | "accept-all"
  | "reject-all"
  | "preferences"
  | "external"
  | "unknown";

export interface SaveConsentOptions {
  source?: ConsentUpdateSource;
}

export interface LoveCookiesInitOptions {
  policyUrl?: string;
  position?: Position;
  accentColor?: string;
  accentSecondary?: string;
  fontFamily?: string;
  borderRadius?: string;
  autoShow?: boolean;
  host?: HTMLElement;
  siteId?: string;
  consentEndpoint?: string;
  categories?: ConsentCategoryDefinition[];
}

export interface ResolvedLoveCookiesOptions {
  policyUrl: string;
  position: Position;
  accentColor: string;
  accentSecondary: string;
  fontFamily: string;
  borderRadius: string;
  autoShow: boolean;
}

export interface LoveCookiesEventMap {
  init: (snapshot: ConsentSnapshot) => void;
  "consent:changed": (
    snapshot: ConsentSnapshot,
    context: { source: ConsentUpdateSource }
  ) => void;
  "banner:opened": () => void;
  "banner:closed": () => void;
  "ui:open": () => void;
  "ui:close": () => void;
  error: (error: Error) => void;
}

export interface LoveCookiesPublicAPI {
  init(options?: LoveCookiesInitOptions): void;
  getConsentStatus(): ConsentSnapshot;
  saveConsent(
    consent: ConsentState,
    options?: SaveConsentOptions
  ): ConsentSnapshot;
  openBanner(): void;
  clearConsent(): void;
  canRun(categoryOrServiceId: string): boolean;
  getConsentCategories(): ConsentCategoryDefinition[];
  on<K extends keyof LoveCookiesEventMap>(
    eventName: K,
    callback: LoveCookiesEventMap[K]
  ): () => void;
}
