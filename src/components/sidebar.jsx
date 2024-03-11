import { capitaliseFirstLetter } from "../utils/utils";



export function Sidebar ({allTopics}) {
    return (
        <section className="sidebar">
            <ul className="sidebar-list">
                <p>All</p>
                {allTopics.map((topic) => {
                    return (
                        <p key={topic.slug}>{capitaliseFirstLetter(topic.slug)}</p>   
                    )
                })}
            </ul>
        </section>
    )
}