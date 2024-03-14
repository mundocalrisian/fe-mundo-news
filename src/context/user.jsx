import { createContext, useState } from "react";
import placeHolderImg from "../assets/user-placeholder.png"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedInUserObj, setLoggedInUserObj] = useState({avatar_url: placeHolderImg, name: "Guest", username: "Guest"})


    return( <UserContext.Provider value={{loggedInUserObj, setLoggedInUserObj}}>
            {children}
            </UserContext.Provider>)
}

