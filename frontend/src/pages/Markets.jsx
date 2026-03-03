import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Markets = () => {
  const [stocks, setStocks] = useState([]);

  const getAllStocks = async () => {
    try {
      const res = await axiosInstance.get("stocks");
      setStocks(res.data.stocks);
    } catch (error) {
      console.log("Error fetching stocks", error);
    }
  };

  useEffect(() => {
    getAllStocks();
  }, []);

  return (
    <div>
      <h1>Markets</h1>
      {stocks.map((stock) => (
        <div key={stock._id}>
          <h3>{stock.name}</h3>
          <p>Symbol: {stock.symbol}</p>
          <p>Price: ₹{stock.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Markets;