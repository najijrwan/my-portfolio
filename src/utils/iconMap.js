import * as DevIcons from "developer-icons";

const techList = [
    'Java', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'CSharp', 'Python',
    'React', 'TailwindCSS', 'Github', 'Firebase', 'VercelLight',
];

export const iconMap = Object.fromEntries(
    techList.map(tech => [tech, DevIcons[tech]])
);