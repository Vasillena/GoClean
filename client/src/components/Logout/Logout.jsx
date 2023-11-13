import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
  const { onLogout } = useContext(AuthContext);

  useEffect(() => {
    const logout = async () => {
      try {
        await onLogout();
        <Navigate to="/" />;
      } catch (error) {
        console.error("Logout Error:", error);
      }
    };

    logout();
  }, [onLogout]);

  return <Navigate to="/" />;
}
