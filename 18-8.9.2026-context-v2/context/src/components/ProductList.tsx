import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const products = ["Laptop", "Phone", "Headphones", "Keyboard"];

export default function ProductList() {
  const { cartItems, addItem } = useContext(CartContext);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => {
          const alreadyAdded = cartItems.includes(product);

          return (
            <li key={product} style={{ marginBottom: "0.5rem" }}>
              <span>{product}</span>
              <button onClick={() => addItem(product)} disabled={alreadyAdded}>
                {alreadyAdded ? "Added" : "Add to cart"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}