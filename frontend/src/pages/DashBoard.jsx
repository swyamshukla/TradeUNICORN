import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Dashboard = () => {
  const [summary, setSummary] = useState([]);

  const getMarketSummary = async () => {
    try {
      const res = await axiosInstance.get("stocks/summary");
      setSummary(res.data.stocks);
    } catch (error) {
      console.log("Error fetching summary", error);
    }
  };

  useEffect(() => {
    getMarketSummary();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {summary.map((stock) => (
        <div key={stock._id}>
          <h3>{stock.symbol}</h3>
          <p>Price: ₹{stock.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;