export const CATEGORY_CONFIG = {
  ALL: { id: "all", label: "All", value: "All" },
  WEBSITES: { id: "websites", label: "Websites", value: "Websites" },
  PWA: { id: "pwa", label: "PWA", value: "PWA" },
  WINDOWS: { id: "windows", label: "Windows Applications", value: "Windows Applications" }
};

export const CATEGORIES = Object.values(CATEGORY_CONFIG).map(c => c.label);

