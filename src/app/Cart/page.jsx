"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartItems(cart);
    }
  }, []);

  return (
    <div className="w-full py-10">
      <Navbar />
      <h1 className="text-4xl text-center font-semibold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-xl font-semibold text-yellow-500 mb-4">
                {item.price} x {item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <a href="/Confirm" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg" >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Cart;
