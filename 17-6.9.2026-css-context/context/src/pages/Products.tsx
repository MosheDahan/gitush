import {useContext} from "react";
import ProductContext from "../contexts/ProductContext";

export default function Products() {
  const product = useContext(ProductContext);


  return (
    <div>
      <h1>Products</h1>
      <p>Product Name: {product.productName}</p>
      <p>Price: {product.price.toFixed(2)}</p>
    </div>
  );
}