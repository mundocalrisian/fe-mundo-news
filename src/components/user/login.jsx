import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/user";
import './login.css'
import { getAllUsers } from "../../utils/api";

export function Login () {
    const [tempUser, setTempUser] = useState("")
    const [allUsers, setAllUsers] = useState([])
    const [allUsernames, setAllUsernames] = useState([])
    const {loggedInUserObj} = useContext(UserContext)
    const {setLoggedInUserObj} = useContext(UserContext)
    const [isErrorHidden, setIsErrorHidden] = useState(true)
    const [loginSuccessful, setLoginSuccessful] = useState(loggedInUserObj.name !== 'Guest')

    useEffect(() => {
        getAllUsers()
        .then((results) => {
            setAllUsers(results)
            setIsErrorHidden(true)
            const usernames = results.map((user) => {
                return user.username
            })
            setAllUsernames(usernames)
        })
    }, [])

    function handleSubmit (event) {
        event.preventDefault()
        if (allUsernames.includes(tempUser)){
            allUsers.forEach((user) => {
                if (user.username === tempUser) {
                    setLoggedInUserObj(user)
                }
            })
            setIsErrorHidden(true)
            setLoginSuccessful(true)
            setTempUser("")
        } else {
            setIsErrorHidden(false)
        }
    }

    return (
        <>
        <div className="login-container">
            <h2>Login page</h2>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <label htmlFor="user-input">Username</label>
                <input type="text" value={tempUser} id="user-input" onChange={(event) => {setTempUser(event.target.value)}}/>
                <button type="submit">Login</button>
                <p className="error-text" hidden={isErrorHidden}>Please enter a valid username</p>
                <p hidden={!loginSuccessful}>Welcome {loggedInUserObj.name}!</p>
            <img src={loggedInUserObj.avatar_url} width="100px" alt="" />
            </form>
        </div>
        </>
    )
}

