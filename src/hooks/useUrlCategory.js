import { useLocation } from "react-router-dom"

export const useUrlCategory = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get("category") || "all";
}