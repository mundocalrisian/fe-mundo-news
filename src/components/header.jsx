import userImg from "../assets/user-placeholder.png"

export default function Header ({user}) {
    
    return (
        <section className="main-header">
            <h1><a href="/">NC NEWS</a></h1>
            <div>
                <button>Add article</button>
            </div>
            <div>
                <img src={userImg} width="50px" alt="user avatar" />
                <p>{user}</p>
            </div>
        </section>
    )
}