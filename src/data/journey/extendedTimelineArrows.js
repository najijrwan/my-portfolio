import { TECHS_BY_TECH, PROJECTS, timelineArrows } from '../'
import { extendTimelineArrows } from '@utils'

const baseData = {
  skills: TECHS_BY_TECH,
  projects: PROJECTS,
};

export const extendedTimelineArrows = extendTimelineArrows(timelineArrows, baseData);