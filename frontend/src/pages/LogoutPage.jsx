import api from "../services/api.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function logoutUser() {
      try {
        await api.post("/auth/logout", {});
        alert("Logout successful");
        navigate("/login");
      } catch (err) {
        alert("Logout failed. Please try again.");
        console.log(`Error:${err}`);
      }
    }

    logoutUser();
  }, []);

  return <div></div>;
};

export default LogoutPage;
