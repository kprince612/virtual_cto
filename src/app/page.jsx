import React from "react";
import Navbar from '../app/components/Navbar'

const Home = () => {
  const categories = [
    { name: "Burgers", image: "/images/burger.jpg" },
    { name: "Pizzas", image: "/images/pizza.jpg" },
    { name: "Drinks", image: "/images/drink.jpeg" },
  ];

  const featuredItems = [
    { name: "Cheese Burger", price: "Rs. 100", image: "/images/cheese-burger.webp" },
    { name: "Pepperoni Pizza", price: "Rs. 100", image: "/images/pepperoni-pizza.jpg" },
    { name: "Coke", price: "Rs. 100", image: "/images/coke.jpg" },
    { name: "Cheese Burger", price: "Rs. 100", image: "/images/cheese-burger.webp" },
    { name: "Pepperoni Pizza", price: "Rs. 100", image: "/images/pepperoni-pizza.jpg" },
  ];

  return (
    <>
    <Navbar />
    <div className="w-full">
      {/* Banner Section */}
      <div className="w-full h-[60vh] bg-[url('/images/banner.webp')] bg-cover bg-center flex items-center justify-center text-white text-2xl sm:text-4xl font-bold">
      </div>

      {/* Food Categories */}
      <div className="py-10">
        <h2 className="text-center text-3xl font-semibold mb-6">Food Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto"
              />
              <p className="mt-2 text-lg font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 bg-gray-100">
        <h2 className="text-center text-3xl font-semibold mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="mt-3 text-xl font-medium">{item.name}</h3>
              <p className="text-gray-700 text-lg">{item.price}</p>
              {/* <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
                Order Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
