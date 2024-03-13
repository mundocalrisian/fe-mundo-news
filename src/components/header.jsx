import userImg from "../assets/user-placeholder.png"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/user"
import { Link } from "react-router-dom"


export default function Header () {
    const {loggedInUser} = useContext(UserContext)
    
    return (
        <section className="main-header">
            <h1><Link to="/">NC NEWS</Link></h1>
            <div>
                <button>Add article</button>
            </div>
            <div>
                {/* <img src={userImg} width="50px" alt="user avatar" /> */}
                <p>{loggedInUser}</p>
                <Link to="/login"><span className="bold-text">Login</span></Link>
            </div>
        </section>
    )
}