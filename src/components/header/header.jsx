import "./header.css"
import userImg from "../../assets/user-placeholder.svg"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/user"
import { Link } from "react-router-dom"


export default function Header () {
    const {loggedInUser} = useContext(UserContext)
    const {loggedInUserObj} = useContext(UserContext)
    
    
    return (
        <section className="main-header">
            <h1><Link to="/">NC NEWS</Link></h1>
            {/* <div>
                <button>Add article</button>
            </div> */}
            <div className="header-user-box">
                <img src={loggedInUserObj.avatar_url} width="50px" alt="user avatar" />
                <div className="header-user-text">
                    <p>{loggedInUserObj.name}</p>
                    <Link to="/login"><span className="bold-text">Login</span></Link>
                </div>
            </div>
        </section>
    )
}