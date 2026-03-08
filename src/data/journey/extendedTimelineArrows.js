import { TECHS, PROJECTS, timelineArrows } from '../'
import { extendTimelineArrows } from '@utils'

const baseData = {
  skills: TECHS,
  projects: PROJECTS,
};

export const extendedTimelineArrows = extendTimelineArrows(timelineArrows, baseData);