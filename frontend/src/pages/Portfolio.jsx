import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const getPortfolio = async () => {
    try {
      const res = await axiosInstance.get("portfolio", {
        withCredentials: true,
      });
      setPortfolio(res.data.holdings);
    } catch (error) {
      console.log("Error fetching portfolio", error);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
      {portfolio.map((item) => (
        <div key={item._id}>
          <h3>{item.stock.symbol}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;