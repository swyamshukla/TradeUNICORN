import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { setUser } from "../features/AuthSlice";

const TradeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("auth/logout");
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-6">TradeApp</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/app/markets"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Markets
          </NavLink>

          <NavLink
            to="/app/portfolio"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/app/orders"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/app/profile"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Profile
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-lg font-semibold">Trading Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TradeLayout;