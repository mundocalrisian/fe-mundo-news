import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/user";
import './login.css'
import { getAllUsers } from "../../utils/api";

export function Login () {
    const [allUsers, setAllUsers] = useState([])
    const [tempUser, setTempUser] = useState("")
    const [isValidUser, setIsValidUser] = useState(false)
    const [isErrorHidden, setIsErrorHidden] = useState(true)
    const loggedInUser = useContext(UserContext).loggedInUser
    const setLoggedInUser = useContext(UserContext).setLoggedInUser

    useEffect(() => {
        getAllUsers()
        .then((results) => {
            const usernames = results.map((user) => user.username)
            setAllUsers(usernames)
        })
    }, [setLoggedInUser])

    function handleSubmit (event) {
        console.log(tempUser, "--when submitted");
        event.preventDefault()
        // true
        if (allUsers.includes(tempUser)){
            setLoggedInUser(tempUser)
            setIsValidUser(true)
            setIsErrorHidden(true)
            setTempUser("")
        } else {
        // false
            setIsErrorHidden(false)
            setIsValidUser(false)
        }
    }
    

    return (
        <>
            <div className="login-container">
                <h2>Login page</h2>
                <p>Current user is {loggedInUser}</p>
                <form onSubmit={(event)=>{handleSubmit(event)}}>
                    <label htmlFor="user-input">Username</label>
                    <input type="text" value={tempUser} id="user-input" onChange={(event) => {console.log(event.target.value); setTempUser(event.target.value)}}/>
                    <button type="submit">Login</button>
                    <p className="error-text" hidden={isErrorHidden}>Please enter a valid username</p>
                </form>
            </div>
        </>
    )
}

// call /api/users and see if name exists in the array DONE
// if so, then log in and setLoggedInUser DONE
// if not then display user not listed DONE

// then set condtional only allowing vote if user is logged in and not guest
// then use the logged user to input author field for comments body
// comment field should be required
// body should look like - 
// {"author": "icellusedkars", "body": "We will see about that!"}
// comments are returned with most recent first 
// render optimistically
// give some sort of successfull popup?
