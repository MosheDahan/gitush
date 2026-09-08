import {useContext} from "react";
import UserContext from "../contexts/UserContext";

function About() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>About</h1>
            <p>Name: {user.name}</p>
            <p>Logged In: {user.isLoggedIn ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default About;