// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, children }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   let location = useLocation();

//   if (!loading && !isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (!loading && isAdmin === true && user.role !== "admin") {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   return children;
// };

// export default ProtectedRoute;

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const navigate = useNavigate();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === false) {
    if (isAuthenticated === false) {
      return navigate("/login");
    }
    if (isAdmin === true && user.role === "user") {
      return navigate("/login");
    }
    return children;
  }
};

export default ProtectedRoute;
