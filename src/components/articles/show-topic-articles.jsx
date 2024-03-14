import { useEffect, useState } from "react";
import { getTopicArticles } from "../../utils/api";
import { ShowArticleCard } from "./show-article-card";
import { useParams } from "react-router-dom";
import { ShareButtons } from "../share/share-buttons";

export default function ShowTopicArticles ({allTopics}) {
    const [topicArticles, setTopicArticles] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    const topic = useParams().topic
    
    useEffect(() => {
        getTopicArticles(topic)
        .then((data) => {
            setTopicArticles(data)
            setIsFetching(false)
        })
    }, [topic])

    if (isFetching) {
        return (
            <div>
                <p>Fetching articles...</p>
            </div>
        )
    } else {
        return (
            <section className="articles-container">
                <select name="Sort By" id="">
                    <option value="Topic">Date (Ascending)</option>
                    <option value="Topic">Date (Descending)</option>
                    <option value="Topic">Comment Count (Ascending)</option>
                    <option value="Topic">Comment Count (Descending)</option>
                    <option value="Topic">Votes (Ascending)</option>
                    <option value="Topic">Votes (Descending)</option>
                </select>
                {/* <ShareButtons /> */}
                {topicArticles.map((article) => {
                    return (
                        <div key={article.article_id} className="article-card">
                        <ShowArticleCard article={article}/>
                    </div>
                )
            })}
            </section>
        )
    }
    




}