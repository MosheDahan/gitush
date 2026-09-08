import React from "react";
import { useCart } from "../../contexts/CartContext";

const products: string[] = ["Laptop", "Phone", "Headphones", "Keyboard"];

export const ProductList: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>Product List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <span>{product}</span>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};