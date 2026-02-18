import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { PageTitle } from '@ui'
import { DesktopFilters, MobileFilters, ProjectsGrid } from '@projects'

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (selectedCategory !== params.get("category")) {
      params.set("category", selectedCategory);
      navigate({ search: params.toString() }, { replace: true });
    }
  }, [selectedCategory, location.search, navigate]);

  return (
    <>
      <PageTitle title="Projects" />

      <DesktopFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <MobileFilters
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProjectsGrid selectedCategory={selectedCategory} />
    </>
  );
}

export default Projects;

