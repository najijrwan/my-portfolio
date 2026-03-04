import { PROJECTS, timelineArrows } from '@data'

export const mergedProjects = timelineArrows
  .flatMap(arrow =>
    (arrow.projects || []).map(p => {
      const base = PROJECTS.find(pr => pr.name === p.ref);
      if (!base) return null;

      const merged = {
        ...base,
        ...p,
        id: p.id,
        startDateMonth: arrow.startDateMonth,
        startDateYear: arrow.startDateYear,
        endDateMonth: arrow.endDateMonth,
        endDateYear: arrow.endDateYear,
        skills: arrow.skills,
      };

      return {
        ...merged,
        finalLabel: merged.role
          ? `${merged.name} (${merged.role})`
          : merged.label || merged.name
      };
    })
  )
  .filter(Boolean);
