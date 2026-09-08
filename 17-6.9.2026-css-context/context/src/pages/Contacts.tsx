import {useContext} from "react";
import UserContext from "../contexts/UserContext";

function Contacts() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Contacts</h1>
            <p>Name: {user.name}</p>
            <p>Logged In: {user.isLoggedIn ? 'Welcome Moshe! You can contact us anytime.' : 'Please Login to contact us.'}</p>
        </div>
    );
}

export default Contacts;