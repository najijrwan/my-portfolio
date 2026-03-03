import { PageTitle } from '@ui'
import { DesktopFilters, MobileFilters, ProjectsGrid } from '@projects'
import { useProjectsFilters } from '@hooks'

const Projects = () => {
  const {
    selectedRole,
    setSelectedRole,
    dropdownOpen,
    setDropdownOpen
  } = useProjectsFilters();

  return (
    <>
      <PageTitle title="Projects" />

      <DesktopFilters
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />

      <MobileFilters
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />

      <ProjectsGrid selectedRole={selectedRole} />
    </>
  );
}

export default Projects;