import { TECHS_BY_TECH } from '@data';
import * as DevIcons from "developer-icons";

export const iconMap = Object.fromEntries(
    Object.values(TECHS_BY_TECH).map(skill => [
        skill.name,
        DevIcons[skill.devIcon || skill.name]
    ])
);