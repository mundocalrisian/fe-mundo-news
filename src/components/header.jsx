import userImg from "../assets/user-placeholder.png"
import { useContext } from "react"
import { UserContext } from "../context/user"

export default function Header () {
    const userLoggedIn = useContext(UserContext).user
    
    return (
        <section className="main-header">
            <h1><a href="/">NC NEWS</a></h1>
            <div>
                <button>Add article</button>
            </div>
            <div>
                <img src={userImg} width="50px" alt="user avatar" />
                <p>{userLoggedIn}</p>
                <a href="">Login/Logout</a>
            </div>
        </section>
    )
}