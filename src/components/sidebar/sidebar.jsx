import "./sidebar.css"
import { useContext, useState } from "react";
import { capitaliseFirstLetter } from "../../utils/utils";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/sidebar";
import menuIcon from "../../assets/menu-three-lines.svg"


export function Sidebar ({allTopics}) {
const {isSidebarOpen} = useContext(SidebarContext)
const {setIsSidebarOpen} = useContext(SidebarContext)
    // const [isSidebarOpen, setIsSideBarOpen] = useState(true);

    const handleViewSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const sidebarClass = isSidebarOpen ? "sidebar open" : "sidebar"

    return (
        <>
            {/* <button>Click here</button> */}
        <section id="mySidebar" className={sidebarClass}>
            <input type="image" src={menuIcon} onClick={handleViewSidebar} className="sidebar-toggle"></input>
            <div>
            <a href="javascript:void(0)" className="closebtn" onClick={handleViewSidebar}>×</a>
            <h2 className="sidebar-header">TOPICS</h2>
            <ul className="sidebar-list">
                <p><Link to ="/articles">All</Link></p>
                {allTopics.map((topic) => {
                    return (
                        <p key={topic.slug}>
                            <Link to={`/articles/${topic.slug}`}>{capitaliseFirstLetter(topic.slug)}</Link>
                        </p>
                    )
                })}
                
            </ul>
            </div>
        </section>
        {/* <div id="main">
        <button class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
        </div> */}
        </>
    )
}