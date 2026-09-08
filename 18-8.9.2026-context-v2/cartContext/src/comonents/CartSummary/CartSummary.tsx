import React from "react";
import { useCart } from "../../contexts/CartContext";

export const CartSummary: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div
      style={{
        marginTop: "1.5rem",
        padding: "1rem",
        borderTop: "1px solid #ccc",
      }}
    >
      <h3>Cart Summary</h3>
      <p>Number of items in cart: {cartItems.length}</p>
      <button
        onClick={clearCart}
        disabled={cartItems.length === 0}
        style={{
          cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};