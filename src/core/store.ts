import type { ConsentSnapshot, ConsentState } from "../types";

const STORAGE_KEY = "LoveCookiesConsent";
const COOKIE_PREFIX = "lovecookies_";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function loadConsent(defaultState: ConsentState): ConsentSnapshot {
  if (!isBrowser()) {
    return {
      categories: { ...defaultState },
      timestamp: null,
      hasConsent: false,
      version: 1,
    };
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return {
        categories: { ...defaultState },
        timestamp: null,
        hasConsent: false,
        version: 1,
      };
    }

    const parsed = JSON.parse(stored) as {
      categories?: ConsentState;
      timestamp?: number;
      version?: number;
    };

    const snapshot: ConsentSnapshot = {
      categories: parsed.categories ? { ...defaultState, ...parsed.categories } : { ...defaultState },
      timestamp: parsed.timestamp ?? null,
      hasConsent: Boolean(parsed.timestamp),
      version: parsed.version ?? 1,
    };

    syncCookies(snapshot.categories);
    return snapshot;
  } catch {
    return {
      categories: { ...defaultState },
      timestamp: null,
      hasConsent: false,
      version: 1,
    };
  }
}

export function persistConsent(state: ConsentState): ConsentSnapshot {
  const snapshot: ConsentSnapshot = {
    categories: { ...state },
    timestamp: Date.now(),
    hasConsent: true,
    version: 1,
  };

  if (isBrowser()) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          categories: snapshot.categories,
          timestamp: snapshot.timestamp,
          version: snapshot.version,
        })
      );
    } catch {
      // noop
    }
    syncCookies(snapshot.categories);
  }

  return snapshot;
}

export function clearStoredConsent(defaultState: ConsentState): ConsentSnapshot {
  if (isBrowser()) {
    window.localStorage.removeItem(STORAGE_KEY);
    clearCookies();
  }

  return {
    categories: { ...defaultState },
    timestamp: null,
    hasConsent: false,
    version: 1,
  };
}

function syncCookies(state: ConsentState) {
  if (!isBrowser()) return;
  Object.entries(state).forEach(([category, granted]) => {
    const key = `${COOKIE_PREFIX}${category}`;
    document.cookie = `${key}=${granted ? "1" : "0"};path=/;max-age=${ONE_YEAR_SECONDS};SameSite=Lax`;
  });
}

function clearCookies() {
  if (!isBrowser()) return;
  const cookies = document.cookie ? document.cookie.split(";") : [];
  cookies.forEach((cookie) => {
    const [name] = cookie.split("=");
    const trimmed = name.trim();
    if (trimmed.startsWith(COOKIE_PREFIX)) {
      document.cookie = `${trimmed}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
    }
  });
}
