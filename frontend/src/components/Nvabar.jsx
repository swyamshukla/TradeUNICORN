import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-2 flex gap-10 items-center justify-between bg-white shadow">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/app")}
      >
        TradeApp
      </h1>

      <nav className="flex gap-8 text-lg font-semibold">
        <NavLink to="/app/dashboard">Dashboard</NavLink>
        <NavLink to="/app/markets">Markets</NavLink>
        <NavLink to="/app/portfolio">Portfolio</NavLink>
        <NavLink to="/app/orders">Orders</NavLink>
        <NavLink to="/app/profile">Profile</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;