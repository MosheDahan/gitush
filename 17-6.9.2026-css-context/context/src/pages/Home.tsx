import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function Home() {

  const user = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Name: {user.name}</p>
      <p>Logged In: {user.isLoggedIn ? "Yes" : "No"}</p>
    </div>
  );
}
