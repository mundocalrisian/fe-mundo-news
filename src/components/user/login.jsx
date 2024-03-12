import { useContext } from "react";
import { UserContext } from "../../context/user";
import './login.css'

export function Login () {
    console.log(useContext(UserContext));
    const userLoggedIn = useContext(UserContext).user
    const setUserLoggedIn = useContext(UserContext).setUser
    

    return (
        <div className="login-container">
            <h2>Login page</h2>
            <p>Current user is {userLoggedIn}</p>
        </div>
    )
}

// call /api/users and see if name exists in the array
// if so, then log in and setLoggedInUser
// if not then display user not listed

// then set condtional only allowing vote if user is logged in and not guest
// then use the logged user to input author field for comments body
// body should look like - 
// {"author": "icellusedkars", "body": "We will see about that!"}
// comments are returned with most recent first 
