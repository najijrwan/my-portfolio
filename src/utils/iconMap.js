import * as DevIcons from "developer-icons";

const techList = [
    'Java', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'CSharp', 'Python', 'Firebase',
    'React', 'TailwindCSS',
];

export const iconMap = Object.fromEntries(
    techList.map(tech => [tech, DevIcons[tech]])
);