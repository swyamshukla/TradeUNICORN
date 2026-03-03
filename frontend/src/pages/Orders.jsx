import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await axiosInstance.get("orders", {
        withCredentials: true,
      });
      setOrders(res.data.orders);
    } catch (error) {
      console.log("Error fetching orders", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>{order.stock.symbol}</p>
          <p>Type: {order.type}</p>
          <p>Qty: {order.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;