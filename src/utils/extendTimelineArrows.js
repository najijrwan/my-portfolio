export const extendTimelineArrows = (timelineArrows, baseData) => {
  return timelineArrows.map(timeline => ({
    ...timeline,
    
    skills: (timeline.skills || []).map(skillExtension => {
      const baseSkill = baseData.skills.find(s => s.tech === skillExtension.ref);
      return {
        ...baseSkill,
        ...skillExtension,
      };
    }),
    // Merge projects
    projects: (timeline.projects || []).map(projectExtension => {
      const baseProject = baseData.projects.find(p => p.name === projectExtension.ref);
      return {
        ...baseProject,
        ...projectExtension,
        finalLabel: projectExtension.role
          ? `${baseProject?.name || projectExtension.ref} (${projectExtension.role})`
          : projectExtension.label || baseProject?.name,
      };
    }),
  }));
};

// data/merged.js
import { TECHS, PROJECTS, timelineArrows } from '@data'

const baseData = {
  skills: TECHS,
  projects: PROJECTS,
};

export const extendedTimelineArrows = extendTimelineArrows(timelineArrows, baseData);