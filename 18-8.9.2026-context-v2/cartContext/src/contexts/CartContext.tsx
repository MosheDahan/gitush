import { createContext, useContext, useState, type ReactNode } from 'react'

interface CartContextType {
  cartItems: string[]
  addItem: (item: string) => void
  removeItem: (item: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  const addItem = (item: string) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeItem = (itemToRemove: string) => {
    setCartItems((prevItems) => {
      const indexToRemove = prevItems.indexOf(itemToRemove)

      if (indexToRemove === -1) return prevItems

      return prevItems.filter((_, index) => index !== indexToRemove)
    })
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)

  return context
}