import { useState } from "react";
import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';

const EyeOutlineIcon = ({ className = "w-4 h-4 text-highlight stroke-[50]" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" stroke="currentColor" className={className}>
    <title>Eye</title>
    <path
      d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="256" cy="256" r="80" strokeMiterlimit="10" />
  </svg>
);

const figureEle1 = `
  relative w-full h-[200px] rounded-[16px] overflow-hidden mb-[15px] ms:h-auto sm:rounded-[16px] 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:z-10 
  before:custom-transition-1 group-hover:before:bg-[#00000080]`;

const divEle3 = `
  bg-jet text-yellow-crayola absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
  scale-[0.8] group-hover:scale-[1.3] group-hover:opacity-100 opacity-0 
  custom-transition-1 p-[14px] rounded-[12px] z-10`;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { label: "All", value: "all" },
    { label: "Applications", value: "applications" },
    { label: "Websites", value: "websites" },
    { label: "Others", value: "others" },
  ];

  const projectData = [
    {
      title: "Nagaraki App",
      type: "applications",
      img: "src/assets/nagarikapp.png"
    },
    {
      title: "Nagaraki Appppp",
      type: "websites",
      img: "src/assets/nagarikapp.png"
    },
    {
      title: "Nagaraki not",
      type: "others",
      img: "src/assets/nagarikapp.png"
    },
    // Add more projects here
  ];

  const filteredProjects = selectedCategory === "all"
    ? projectData
    : projectData.filter(project => project.type === selectedCategory);

  return (
    <article>
      <Navbar />
      <div className="p-[15px] sm:p-[30px]">
        <h2 className={h2Ele}>Projects</h2>

        <section>
          {/* Desktop Filter Buttons */}
          <ul className="hidden md:flex gap-2 mb-4">
            {categories.map(({ label, value }) => (
              <li key={value}>
                <button
                  className={`px-4 py-2 rounded-full ${selectedCategory === value
                    ? "bg-yellow-crayola text-black"
                    : "bg-eerie-2 text-light-gray"
                    }`}
                  onClick={() => setSelectedCategory(value)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>


          {/* Mobile Dropdown */}
          <div className="relative mb-[25px] md:hidden">
            <button
              className="bg-eerie-2 text-light-gray flex justify-between items-center w-full py-[12px] px-[16px] border border-solid border-jet rounded-[14px] text-[14px] font-[300]"
              onClick={() => setDropdownOpen(prev => !prev)}
            >
              <div>{categories.find(c => c.value === selectedCategory)?.label ?? "All"}</div>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon w-4 h-4" viewBox="0 0 512 512">
                <title>Chevron Down</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144" />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="bg-eerie-2 absolute top-full mt-2 w-full p-[6px] border border-solid border-jet rounded-[14px] z-20">
                {categories.map(({ label, value }) => (
                  <li key={value}>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-jet"
                      onClick={() => {
                        setSelectedCategory(value);
                        setDropdownOpen(false);
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Projects Grid */}
          <ul className="grid grid-cols-1 gap-7.5 mb-2.5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <li key={index} className="block animate-scaleUp">
                <a href="#" className="block w-full group">
                  <figure className={figureEle1}>
                    <div className={divEle3}>
                      <EyeOutlineIcon />
                    </div>
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover block custom-transition-1 group-hover:scale-[1.1]"
                    />
                  </figure>
                  <h3 className="text-base text-[15px]/4 font-[400] ml-[10px]">{project.title}</h3>
                  <p className="text-light-gray-70 text-[15px] font-[300] ml-2.5 capitalize">{project.type}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default Projects;
