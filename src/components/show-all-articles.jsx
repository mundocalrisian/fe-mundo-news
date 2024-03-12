import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { ShowArticleCard } from "./show-article-card";

export default function ShowAllArticles ({allTopics}) {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getAllArticles()
        .then((data) => setAllArticles(data))
    }, [])

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
                {allArticles.map((article) => {
                return (
                    <div key={article.article_id} className="article-card">
                        <ShowArticleCard article={article}/>
                    </div>
                )
                })}
            </section>
    )

}