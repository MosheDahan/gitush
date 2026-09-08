import { useState } from "react";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ProductContext from "./contexts/ProductContext";
import Products from "./pages/Products";
import ThemeContext from "./contexts/ThemeContext";
function App() {
  const [theme] = useState("dark");
  return (
<ThemeContext.Provider value={{theme}}>
  <ProductContext.Provider value={{productName: "Laptop", price: 4000}}>
    <UserContext.Provider value={{name: "Moshe", isLoggedIn: false,}}>
      <Home />
      <Contacts />
      <About />
      <Products />
    </UserContext.Provider>
  </ProductContext.Provider>
</ThemeContext.Provider>
)
}
export default App;