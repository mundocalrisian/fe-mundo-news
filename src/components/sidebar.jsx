import { useContext } from "react";
import { capitaliseFirstLetter } from "../utils/utils";

export function Sidebar ({allTopics}) {

    return (
        <section className="sidebar">
            <ul className="sidebar-list">
                <p><a href="/articles">All</a></p>
                
                {allTopics.map((topic) => {
                    return (
                        <p key={topic.slug}>
                            <a href={`/articles/${topic.slug}`}>{capitaliseFirstLetter(topic.slug)}</a>
                        </p>
                    )
                })}
            </ul>
        </section>
    )
}