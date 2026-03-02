import { useState } from "react"
import { useUrlCategory } from "./useUrlCategory"
import { useCategorySync } from "./useCategorySync"

export const useProjectsFilters = () => {
  const urlCategory = useUrlCategory();
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useCategorySync(selectedCategory);

  return {
    selectedCategory,
    setSelectedCategory,
    dropdownOpen,
    setDropdownOpen
  };
}