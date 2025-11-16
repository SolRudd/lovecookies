import { registry, type ServiceDescriptor } from "./services";

type CanRunFn = (target: string) => boolean;

interface BlockedScriptMeta {
  category: string;
  serviceId?: string;
  attributes: { name: string; value: string }[];
  textContent: string;
  restored?: boolean;
}

const blockedScripts = new Map<HTMLScriptElement, BlockedScriptMeta>();

export function enforceBlocking(canRun: CanRunFn) {
  if (typeof document === "undefined") return;
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    "script[data-cookie-category], script[data-cookie-service], script[src]"
  );

  scripts.forEach((script) => {
    const meta = resolveScriptMeta(script);
    if (!meta) return;

    if (!canRun(meta.serviceId ?? meta.category)) {
      blockScript(script, meta);
    } else {
      releaseScript(script);
    }
  });

  // Clean up entries that no longer exist in DOM
  Array.from(blockedScripts.keys()).forEach((node) => {
    if (!document.contains(node)) {
      blockedScripts.delete(node);
    }
  });
}

function resolveScriptMeta(script: HTMLScriptElement) {
  const serviceId = script.dataset.cookieService;
  const categoryFromAttr = script.dataset.cookieCategory;

  if (serviceId) {
    const descriptor = registry.getService(serviceId);
    if (!descriptor) return null;
    return { category: descriptor.category, serviceId };
  }

  if (categoryFromAttr) {
    return { category: categoryFromAttr, serviceId: undefined };
  }

  const src = script.getAttribute("src") ?? "";
  if (!src) return null;

  const match = findServiceBySrc(src);
  if (!match) return null;
  script.dataset.cookieService = match.id;
  return { category: match.category, serviceId: match.id };
}

function blockScript(script: HTMLScriptElement, meta: { category: string; serviceId?: string }) {
  if (script.dataset.lcBlocked === "true") return;

  const attributes = Array.from(script.attributes).map(({ name, value }) => ({
    name,
    value,
  }));

  blockedScripts.set(script, {
    category: meta.category,
    serviceId: meta.serviceId,
    attributes,
    textContent: script.textContent ?? "",
  });

  script.type = "text/plain";
  script.dataset.lcBlocked = "true";
}

function releaseScript(script: HTMLScriptElement) {
  if (script.dataset.lcBlocked !== "true") return;

  const meta = blockedScripts.get(script);
  if (!meta || meta.restored) {
    script.dataset.lcBlocked = "false";
    return;
  }

  const clone = document.createElement("script");
  meta.attributes.forEach(({ name, value }) => {
    if (name === "data-lc-blocked") return;
    if (name === "type") {
      clone.setAttribute("type", value || "text/javascript");
      return;
    }
    clone.setAttribute(name, value);
  });

  if (!clone.src) {
    clone.textContent = meta.textContent;
  }

  script.dataset.lcBlocked = "false";
  meta.restored = true;
  blockedScripts.delete(script);

  script.parentNode?.insertBefore(clone, script.nextSibling);
}

function findServiceBySrc(src: string): ServiceDescriptor | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const url = new URL(src, window.location.href);
    const host = url.hostname;
    return registry
      .allServices()
      .find((service) => service.hosts.some((allowed) => host.includes(allowed)));
  } catch {
    return undefined;
  }
}
