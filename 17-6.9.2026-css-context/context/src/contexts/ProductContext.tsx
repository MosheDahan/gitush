import {createContext} from "react";

interface ProductContextType {
  productName: string;
  price: number;
}
const ProductContext = createContext<ProductContextType>({
    productName: '',
    price: 0,
});
export default ProductContext;