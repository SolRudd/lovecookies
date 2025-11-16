import type { ConsentCategoryDefinition } from "../types";

export const DEFAULT_CATEGORIES: ConsentCategoryDefinition[] = [
  {
    id: "essential",
    label: "Essential",
    description: "Required for core functionality such as security and basic preferences.",
    required: true,
  },
  {
    id: "functional",
    label: "Functional",
    description: "Improves usability, such as remembering language or region settings.",
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Helps us understand site usage and improve performance.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Used for advertising and measuring campaign effectiveness.",
  },
  {
    id: "personalization",
    label: "Personalization",
    description: "Enables tailored content or product recommendations.",
  },
];

export function withServiceCategories(
  base: ConsentCategoryDefinition[],
  serviceCategories: string[]
): ConsentCategoryDefinition[] {
  const existing = new Map(base.map((cat) => [cat.id, cat]));
  serviceCategories.forEach((id) => {
    if (!existing.has(id)) {
      existing.set(id, {
        id,
        label: capitalize(id),
        description: "Category required by configured services.",
      });
    }
  });
  return Array.from(existing.values());
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
}
