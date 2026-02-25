// utils/projects.js
import { PROJECTS, timelineArrows } from "@data";

/**
 * Build a lookup map for base projects.
 * Key preference: use `ref` if present on the base project, otherwise `title`.
 */
export const PROJECTS_MAP = PROJECTS.reduce((acc, project) => {
  const key = project.ref ?? project.title;
  if (key != null) acc[key] = project;
  return acc;
}, {});

/**
 * Resolve projects for a single arrow (same logic you had inline).
 * Returns an array of merged project objects (base + arrow overrides).
 */
export const resolveArrowProjects = (arrow) => {
  return (arrow.projects || []).map((p) => {
    const base = PROJECTS_MAP[p.ref] ?? PROJECTS_MAP[p.title];
    if (!base) {
      console.warn(`No project found for ref: ${p.ref}`);
      return { ...p };
    }
    return { ...base, ...p };
  });
};

/**
 * Merge all timelineArrows projects into a flat array.
 * Options:
 *  - dedupe: collapse duplicates by key (default true)
 *  - keySelector: function to pick the dedupe key (default uses p.ref || p.title)
 */
export const mergeTimelineProjects = (opts = {}) => {
  const { dedupe = true, keySelector = (p) => p.ref ?? p.title } = opts;

  const merged = timelineArrows.flatMap((arrow) =>
    (arrow.projects || []).map((p) => {
      const base = PROJECTS_MAP[p.ref] ?? PROJECTS_MAP[p.title];
      if (!base) {
        console.warn(`No project found for ref: ${p.ref}`);
        return { ...p };
      }
      return { ...base, ...p };
    })
  );

  if (!dedupe) return merged;

  const map = new Map();
  merged.forEach((proj) => {
    const key = keySelector(proj);
    if (key == null) return;
    // lastWins behavior (same as your earlier reduce push semantics)
    map.set(key, proj);
  });

  return Array.from(map.values());
};
