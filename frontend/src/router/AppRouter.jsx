import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { setUser } from "../features/AuthSlice";

import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/ProtectedRoute";

import AuthLayout from "../layout/AuthLayout";
import TradeLayout from "../layout/TradeLayout";

import Dashboard from "../pages/Dashboard";
import Markets from "../pages/Markets";
import Portfolio from "../pages/Portfolio";
import Orders from "../pages/Orders.jsx";
import Profile from "../pages/Profile";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("auth/current-user");
        dispatch(setUser(res.data.user));
      } catch (error) {
        console.log("User not logged in");
      }
    })();
  }, []);

  const router = createBrowserRouter([
    // Public Routes (Login / Register)
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },

    // Protected Trade App Routes
{
  path: "/app",
  element: <ProtectedRoute />,
  children: [
    {
      element: <TradeLayout />,
      children: [
        { index: true, element: <Dashboard /> }, // 👈 ADD THIS
        { path: "dashboard", element: <Dashboard /> },
        { path: "markets", element: <Markets /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ],
}
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;