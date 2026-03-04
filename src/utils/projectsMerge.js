import { PROJECTS, timelineArrows } from '@data'

export const mergedProjects = timelineArrows
  .flatMap(timeline =>
    (timeline.projects || []).map(projectRef => {
      const projectDefinition = PROJECTS.find(pr => pr.name === projectRef.ref);
      if (!projectDefinition) return null;

      const combinedProject = {
        ...projectDefinition,
        ...projectRef,
        id: projectRef.id,
        startDateMonth: timeline.startDateMonth,
        startDateYear: timeline.startDateYear,
        endDateMonth: timeline.endDateMonth,
        endDateYear: timeline.endDateYear,
        skills: timeline.skills,
      };

      return {
        ...combinedProject,
        finalLabel: combinedProject.role
          ? `${combinedProject.name} (${combinedProject.role})`
          : combinedProject.label || combinedProject.name
      };
    })
  )
  .filter(Boolean);
