# LoveCookies SDK

The LoveCookies SDK is a lightweight, embeddable CMP that renders a single React banner + preference layer while exposing a predictable API you can drive from any framework.

## Public API

```ts
LoveCookies.init(options?: LoveCookiesInitOptions);
LoveCookies.getConsentStatus();      // => { categories, timestamp, hasConsent }
LoveCookies.saveConsent(categories); // persists + syncs Consent Mode v2
LoveCookies.openBanner();            // forces banner open
LoveCookies.clearConsent();          // wipes cookies/storage + reopens banner
LoveCookies.canRun("analytics");     // true/false by category or service id
LoveCookies.on("consent:changed", handler);
LoveCookies.getConsentCategories();  // metadata for UI overrides
```

All DOM work happens inside `LoveCookies.init()`, making it safe to import inside SSR runtimes. Nothing is injected until `init` is called.

## Integrating the SDK

### Vanilla / static sites

```html
<script src="/vendor/lovecookies.umd.js" defer></script>
<script>
  window.addEventListener("load", () => {
    window.LoveCookies.init({
      policyUrl: "/privacy-policy",
      position: "bottom-right",
      accentColor: "#00c471",
    });
  });
</script>
```

Attach `data-cookie-category="analytics"` or `data-cookie-service="google_analytics"` to any `<script>` tags that must stay paused until consent is granted. The SDK will block them and replay once the relevant category is enabled.

### Next.js 13+

```tsx
import { useEffect } from "react";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.LoveCookies?.init({
      policyUrl: "/privacy-policy",
      position: "bottom-center",
      siteId: "nextjs-app",
    });
  }, []);

  return (
    <>
      <Script src="/vendor/lovecookies.umd.js" strategy="afterInteractive" />
      {children}
    </>
  );
}
```

Use the exposed events to hook analytics:

```ts
LoveCookies.on("consent:changed", (snapshot) => {
  console.log("Consent updated", snapshot.categories);
});
```

## Service blocking

`services.json` maps each service to a category. The SDK automatically blocks:

- `<script data-cookie-category="analytics">`
- `<script data-cookie-service="google_analytics">`
- `<script src="https://www.googletagmanager.com/gtag/js?id=...">`

When consent changes we replay the blocked script exactly once, guaranteeing that trackers are not executed before a user grants the right category.

## Roadmap toward TCF 2.2

The current release keeps categories granular and reversible, and no consent is assumed before the banner shows. Remaining items before full TCF support:

1. Build a consent string encoder/decoder + vendor list resolver.
2. Surface a second-layer UI with CMP IDs / purpose toggles required by TCF.
3. Provide an `__tcfapi` shim with queued command handling.
4. Allow per-vendor overrides + data retention metadata.
5. Extend blocking map to honour the IAB Global Vendor List automatically.

## Development

```bash
npm install
npm run dev   # dev harness at http://localhost:5173
npm run build # outputs dist/lovecookies.umd.cjs + lovecookies.css
```

> **Note:** Vite 7 requires Node.js ≥ 20.19. If you're on an older runtime the CLI prints a warning during build.
