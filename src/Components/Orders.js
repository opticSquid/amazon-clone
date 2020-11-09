import React, { useState, useEffect } from "react";
import "../Stylesheets/Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./OrderList";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }] = useStateValue();
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapShot) =>
          setOrders(
            snapShot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
