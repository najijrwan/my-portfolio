import { PageTitle } from '@ui'
import { DesktopFilters, MobileFilters, ProjectsGrid } from '@projects'
import { useProjectsFilters } from '@hooks'

const Projects = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    dropdownOpen,
    setDropdownOpen
  } = useProjectsFilters();

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