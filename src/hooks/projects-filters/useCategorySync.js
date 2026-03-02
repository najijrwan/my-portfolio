import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useCategorySync = (selectedCategory) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (selectedCategory !== params.get("category")) {
      params.set("category", selectedCategory);
      navigate({ search: params.toString() }, { replace: true });
    }
  }, [selectedCategory, location.search, navigate]);
}