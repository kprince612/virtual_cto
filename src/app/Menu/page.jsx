"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";

const menuItems = [
  {
    name: "Cheese Burger",
    description: "A delicious food with fresh ingredients.",
    price: "Rs. 100",
    image: "/images/cheese-burger.webp",
  },
  {
    name: "Pepperoni Pizza",
    description: "A delicious food with fresh ingredients.",
    price: "Rs. 100",
    image: "/images/pepperoni-pizza.jpg",
  },
  {
    name: "Coke",
    description: "A delicious food with fresh ingredients.",
    price: "Rs. 100",
    image: "/images/coke.jpg",
  },
  {
    name: "Veggie Burger",
    description: "A delicious food with fresh ingredients.",
    price: "Rs. 100",
    image: "/images/burger.jpg",
  },
  {
    name: "Margherita Pizza",
    description: "A delicious food with fresh ingredients.",
    price: "Rs. 100",
    image: "/images/pizza.jpg",
  },
];

const Menu = () => {
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => {
      acc[item.name] = 0;
      return acc;
    }, {})
  );

  const router = useRouter();

  // Function to increase quantity
  const increaseQuantity = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: prevQuantities[itemName] + 1,
    }));

    handleSuccess ("1 item added sucessfully in your cart")
  };

  // Function to decrease quantity
  const decreaseQuantity = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: prevQuantities[itemName] > 0 ? prevQuantities[itemName] - 1 : 0,
    }));

    handleSuccess ("1 item removed sucessfully from your cart")
  };

  // Function to add items to cart and navigate
  const addToCart = () => {
    const cartItems = menuItems.filter(
      (item) => quantities[item.name] > 0
    ).map((item) => ({
      ...item,
      quantity: quantities[item.name],
    }));

    localStorage.setItem("cart", JSON.stringify(cartItems)); // Save cart data in local storage
    router.push("/Cart"); // Navigate to cart page
  };

  return (
    <div className="w-full py-10">
      <Navbar />
      <h1 className="text-4xl text-center font-semibold mb-8">Our Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-xl font-semibold text-yellow-500 mb-4">
              {item.price}
            </p>

            {/* Quantity control buttons */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => decreaseQuantity(item.name)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg font-semibold">
                {quantities[item.name]}
              </span>
              <button
                onClick={() => increaseQuantity(item.name)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Cart button */}

      <div className="flex justify-center">
      <button
        onClick={addToCart}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg mt-4"
      >
        View Cart
      </button>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Menu;