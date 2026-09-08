import {createContext} from "react";

interface UserContextType {
    name: string;
    isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType>({
    name: '',
    isLoggedIn: false,
});

export default UserContext;