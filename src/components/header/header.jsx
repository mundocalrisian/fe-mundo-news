import "./header.css"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/user"
import { Link } from "react-router-dom"


export default function Header () {
    const {loggedInUser} = useContext(UserContext)
    const {loggedInUserObj} = useContext(UserContext)
    
    
    return (
        <section className="main-header">
            <h1><Link to="/">MUNDO NEWS</Link></h1>
            {/* <div>
                <button>Add article</button>
            </div> */}
            <div className="header-user-box">
                <img src={loggedInUserObj.avatar_url} width="50px" alt="user avatar" />
                    <p>{loggedInUserObj.name}</p>
                    <Link to="/login"><span className="bold-text">Login</span></Link>
                {/* <div className="header-user-text">
                </div> */}
            </div>
        </section>
    )
}