import { createContext, useState, type ReactNode } from "react";

interface CartContextType {
  cartItems: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    const trimmedItem = item.trim();
    if (!trimmedItem) return;

    setCartItems((prev) => [...prev, trimmedItem]);
  };

  const removeItem = (item: string) => {
    setCartItems((prev) => {
      const itemIndex = prev.indexOf(item);
      if (itemIndex === -1) return prev;
      return prev.filter((_, index) => index !== itemIndex);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
