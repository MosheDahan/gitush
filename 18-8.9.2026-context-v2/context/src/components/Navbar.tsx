import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";

export default function Navbar() {
  const { firstName, isLoggedIn, logout } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        padding: "12px 16px",
        background: "#111827",
        color: "white",
        borderRadius: "12px",
        marginBottom: "1.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <strong>My App</strong>
        {isLoggedIn && <span>Welcome, {firstName}</span>}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        {!isLoggedIn ? (
          <>
            <span>Please login</span>
            <Link to="/login" style={{ color: "white" }}>Login</Link>
          </>
        ) : (
          <>
            <button onClick={logout} style={{ cursor: "pointer" }}>Logout</button>
          </>
        )}

        <Link to="/profile" style={{ color: "white" }}>Profile</Link>
        <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/product-list" style={{ color: "white" }}>Product List</Link>
        <span>Cart: {cartItems.length}</span>
      </div>
    </nav>
  );
}