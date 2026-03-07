import { Skills, Projects, Educations, Honors, Languages, } from '../'

const SectionRenderer = (type, data) => {
    switch (type) {
        case "summary":
        case "interests":
            return data;

        case "skills":
            return data.map((category) => (
                <Skills key={category.category} category={category} />
            ));

        case "projects":
            return data.map((project) => (
                <Projects key={project.name} project={project} />
            ));

        case "educations":
            return data.map((edu) => (
                <Educations key={edu.degree} edu={edu} />
            ));

        case "honors":
            return data.map((honor) => (
                <Honors key={honor.title} honor={honor} />
            ));

        case "languages":
            return data.map((lan) => (
                <Languages key={lan.lan} lan={lan} />
            ));

        default:
            return [];
    }
};

export default SectionRenderer;