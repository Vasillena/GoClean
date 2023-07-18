// import { Navigate } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../contexts/AuthContext";

// export default function Logout() {
//   const { onLogout } = useContext(AuthContext);

//   useEffect(() => {
//     onLogout();
//   }, [onLogout]);

//   return <Navigate to="/" />;
// }

import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
  const { onLogout } = useContext(AuthContext);

  useEffect(() => {
    const logout = async () => {
      try {
        await onLogout();
        // Redirect to the login page after successful logout
        // You can change the path as per your application's requirement
        <Navigate to="/" />;
      } catch (error) {
        // Handle logout errors
        console.error("Logout Error:", error);
        // Optionally, you can display an error message to the user
        // and handle the error state accordingly
      }
    };

    logout();
  }, [onLogout]);

  return <Navigate to="/" />;
}
