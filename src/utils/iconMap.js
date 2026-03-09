import { TECHS } from '@data';
import * as DevIcons from "developer-icons";

export const iconMap = Object.fromEntries(
    TECHS.map(tech => [tech.label, DevIcons[tech.label]])
);