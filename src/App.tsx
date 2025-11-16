import React, { useEffect, useState } from "react";
import type { BannerBridge } from "./runtime/LoveCookies";
import type {
  ConsentCategoryDefinition,
  ConsentState,
  ResolvedLoveCookiesOptions,
} from "./types";
import Banner from "./ui/Banner";

interface Props {
  bridge: BannerBridge;
}

export default function App({ bridge }: Props) {
  const [visible, setVisible] = useState(() => bridge.isOpen());
  const [showPreferences, setShowPreferences] = useState(false);
  const [categories, setCategories] = useState<ConsentCategoryDefinition[]>(
    () => bridge.getCategories()
  );
  const [appearance, setAppearance] = useState<ResolvedLoveCookiesOptions>(
    () => bridge.getOptions()
  );
  const [draft, setDraft] = useState<ConsentState>(() => ({
    ...bridge.getSnapshot().categories,
  }));

  useEffect(() => {
    setCategories(bridge.getCategories());
    setAppearance(bridge.getOptions());
    setDraft({ ...bridge.getSnapshot().categories });
  }, [bridge]);

  useEffect(() => {
    if (!visible) setShowPreferences(false);
  }, [visible]);

  useEffect(() => {
    const unsubOpen = bridge.on("ui:open", () => {
      setDraft({ ...bridge.getSnapshot().categories });
      setVisible(true);
    });
    const unsubClose = bridge.on("ui:close", () => setVisible(false));
    const unsubChange = bridge.on("consent:changed", (snapshot) => {
      setDraft({ ...snapshot.categories });
    });

    return () => {
      unsubOpen();
      unsubClose();
      unsubChange();
    };
  }, [bridge]);

  const acceptAll = () => {
    const next = toggleAll(categories, true);
    setDraft(next);
    bridge.saveConsent(next, "accept-all");
  };

  const rejectAll = () => {
    const next = toggleAll(categories, false);
    setDraft(next);
    bridge.saveConsent(next, "reject-all");
  };

  const savePreferences = () => bridge.saveConsent(draft, "preferences");

  const handleChange = (categoryId: string, granted: boolean) => {
    setDraft((prev) => ({
      ...prev,
      [categoryId]: granted,
    }));
  };

  return (
    <Banner
      visible={visible}
      options={appearance}
      categories={categories}
      state={draft}
      onChange={handleChange}
      onAcceptAll={acceptAll}
      onRejectAll={rejectAll}
      onSave={savePreferences}
      onClose={() => bridge.requestClose()}
      showPreferences={showPreferences}
      setShowPreferences={setShowPreferences}
    />
  );
}

function toggleAll(
  categories: ConsentCategoryDefinition[],
  enabled: boolean
): ConsentState {
  return categories.reduce<ConsentState>((acc, category) => {
    if (category.required) {
      acc[category.id] = true;
    } else {
      acc[category.id] = enabled;
    }
    return acc;
  }, {});
}
