import "./banner.css";
import React, { useEffect } from "react";
import type {
  ConsentCategoryDefinition,
  ConsentState,
  ResolvedLoveCookiesOptions,
} from "../types";

interface BannerProps {
  visible: boolean;
  options: ResolvedLoveCookiesOptions;
  categories: ConsentCategoryDefinition[];
  state: ConsentState;
  onChange: (categoryId: string, granted: boolean) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: () => void;
  onClose: () => void;
  showPreferences: boolean;
  setShowPreferences: (value: boolean) => void;
}

export default function Banner({
  visible,
  options,
  categories,
  state,
  onChange,
  onAcceptAll,
  onRejectAll,
  onSave,
  onClose,
  showPreferences,
  setShowPreferences,
}: BannerProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--lc-accent", options.accentColor);
    root.style.setProperty("--lc-accent-2", options.accentSecondary);
    root.style.setProperty("--lc-font", options.fontFamily);
    root.style.setProperty("--lc-radius", options.borderRadius);
  }, [options]);

  if (!visible) return null;

  return (
    <div className="lc-root" role="dialog" aria-modal="true">
      <section className="lc-card">
        {!showPreferences ? (
          <FirstLayer
            policyUrl={options.policyUrl}
            onAcceptAll={onAcceptAll}
            onRejectAll={onRejectAll}
            onManage={() => setShowPreferences(true)}
          />
        ) : (
          <SecondLayer
            categories={categories}
            state={state}
            onChange={onChange}
            onSave={onSave}
            onBack={() => setShowPreferences(false)}
            onClose={onClose}
          />
        )}
      </section>
    </div>
  );
}

function FirstLayer({
  policyUrl,
  onAcceptAll,
  onRejectAll,
  onManage,
}: {
  policyUrl: string;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onManage: () => void;
}) {
  return (
    <>
      <h2 className="lc-title">We value your privacy</h2>
      <p className="lc-body">
        We use cookies to personalise content, measure performance, and improve
        your experience. See our{" "}
        <a className="lc-link" href={policyUrl} target="_blank" rel="noreferrer">
          Privacy Policy
        </a>{" "}
        for more information.
      </p>
      <div className="lc-actions">
        <button className="lc-btn lc-btn--ghost" onClick={onManage}>
          Manage preferences
        </button>
        <button className="lc-btn lc-btn--outline" onClick={onRejectAll}>
          Reject all
        </button>
        <button className="lc-btn lc-btn--solid" onClick={onAcceptAll}>
          Accept all
        </button>
      </div>
    </>
  );
}

function SecondLayer({
  categories,
  state,
  onChange,
  onSave,
  onBack,
  onClose,
}: {
  categories: ConsentCategoryDefinition[];
  state: ConsentState;
  onChange: (categoryId: string, granted: boolean) => void;
  onSave: () => void;
  onBack: () => void;
  onClose: () => void;
}) {
  return (
    <div className="lc-preferences">
      <header className="lc-pref-header">
        <div>
          <p className="lc-pref-overline">Detailed choices</p>
          <h3>Manage consent</h3>
        </div>
        <button className="lc-btn lc-btn--ghost" onClick={onClose}>
          Close
        </button>
      </header>
      <div className="lc-pref-body">
        {categories.map((category) => (
          <div key={category.id} className="lc-toggle">
            <div className="lc-toggle-copy">
              <strong>{category.label}</strong>
              <p>{category.description}</p>
            </div>
            <label className="lc-switch">
              <input
                type="checkbox"
                checked={Boolean(state[category.id])}
                disabled={Boolean(category.required)}
                onChange={(event) =>
                  onChange(category.id, event.currentTarget.checked)
                }
              />
              <span className="lc-slider" />
            </label>
          </div>
        ))}
      </div>
      <div className="lc-pref-footer">
        <button className="lc-btn lc-btn--outline" onClick={onBack}>
          Back
        </button>
        <button className="lc-btn lc-btn--solid" onClick={onSave}>
          Save preferences
        </button>
      </div>
    </div>
  );
}
