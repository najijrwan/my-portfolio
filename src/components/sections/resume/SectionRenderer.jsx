import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Honors from "./Honors";
import Languages from "./Languages";

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
            return data.map((item) => (
                <Projects key={item.name} item={item} />
            ));

        case "education":
            return data.map((edu) => (
                <Education key={edu.degree} edu={edu} />
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