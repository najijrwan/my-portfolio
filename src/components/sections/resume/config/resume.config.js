import { SUMMARY, SKILLS, PROJECTS, EDUCATIONS, HONORS, LANGUAGES, INTERESTS } from "@data";

export const resumeSections = [
    {
        type: "summary",
        heading: "professional summary",
        data: SUMMARY,
    },
    {
        type: "skills",
        heading: "skills",
        data: SKILLS,
    },
    {
        type: "projects",
        heading: "projects",
        data: PROJECTS
            .filter((item) => item.rank <= 3 && item.name !== "portfolio")
            .sort((a, b) => a.rank - b.rank),
    },
    {
        type: "education",
        heading: "education",
        data: EDUCATIONS,
    },
    {
        type: "honors",
        heading: "honors",
        data: HONORS,
    },
    {
        type: "languages",
        heading: "languages",
        data: LANGUAGES,
    },
    {
        type: "interests",
        heading: "interests",
        data: INTERESTS,
    },
];