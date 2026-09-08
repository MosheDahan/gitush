import React from "react";
import { useCart } from "../../contexts/CartContext";

export const Cart: React.FC = () => {
  const { cartItems, removeItem } = useCart();

  // אם העגלה ריקה
  if (cartItems.length === 0) {
    return (
      <div style={{ margin: "1rem 0" }}>
        <h2>Cart</h2>
        <p>Cart is empty</p>
      </div>
    );
  }

  // אם יש מוצרים בעגלה
  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>Cart</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cartItems.map((item, index) => (
          <li
            key={`${item}-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <span>{item}</span>
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};