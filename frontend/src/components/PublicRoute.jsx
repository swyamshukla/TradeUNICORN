import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;