"use client";
import { useCart } from "@/context/cartcontext";
import EmptyCartIllustration from "@/public/assets/icons/EmptyCartIllustration";
import React from "react";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="bg-rose-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-redCustom">Your Cart (0)</h2>
      <div className="flex justify-center items-center">
        <EmptyCartIllustration />
      </div>
      <p className="text-center text-rose-500 mt-4">
        Your added items will appear here
      </p>
      {cart.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
