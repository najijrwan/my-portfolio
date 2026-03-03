import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useCategorySync = (selectedRole) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (selectedRole !== params.get("category")) {
      params.set("category", selectedRole);
      navigate({ search: params.toString() }, { replace: true });
    }
  }, [selectedRole, location.search, navigate]);
}