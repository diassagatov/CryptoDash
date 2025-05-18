import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../api/authService";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn()) navigate("/login");
  }, [navigate]);
};
