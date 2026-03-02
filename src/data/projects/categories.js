export const CATEGORY_CONFIG = {
  ALL: { id: "all", label: "All", value: "all" },
  WEBSITES: { id: "websites", label: "Websites", value: "websites" },
  PWA: { id: "pwa", label: "PWA", value: "pwa" },
  WINDOWS: { id: "windows", label: "Windows Applications", value: "windows applications" }
};

export const CATEGORIES = Object.values(CATEGORY_CONFIG).map(c => c.label);

