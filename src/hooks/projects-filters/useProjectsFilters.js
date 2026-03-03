import { useState } from "react"
import { useUrlCategory } from "./useUrlCategory"
import { useCategorySync } from "./useCategorySync"

export const useProjectsFilters = () => {
  const urlCategory = useUrlCategory();
  const [selectedRole, setSelectedRole] = useState(urlCategory);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useCategorySync(selectedRole);

  return {
    selectedRole,
    setSelectedRole,
    dropdownOpen,
    setDropdownOpen
  };
}