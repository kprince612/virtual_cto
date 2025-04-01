"use client";
import React from "react";

export default function Confirm() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      {/* Confirmation Message */}
      <div className="bg-white p-6 rounded-lg  text-center max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Thank You For Ordering In GIR</h2>
        <h4 className="text-xl mb-4">
          Your Order has been recorded and your order details have been sent to your email
        </h4>
        <p className="mb-2">Please review us for better services</p>
        <p className="mb-4">Visit again</p>
        <a
          href="/Home"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
