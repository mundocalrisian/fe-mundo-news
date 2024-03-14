import { useContext } from "react";
import { capitaliseFirstLetter } from "../utils/utils";
import { Link } from "react-router-dom";

export function Sidebar ({allTopics}) {

    return (
        <section className="sidebar">
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
        </section>
    )
}