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

      const combinedProject = {
        ...baseProject,
        ...projectExtension,
      }

      return {
        ...combinedProject,
        finalLabel: combinedProject.role
          ? `${combinedProject.name} (${combinedProject.role})`
          : combinedProject.label || combinedProject.name
      };
    }),
  }));
};