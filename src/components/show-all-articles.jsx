import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { ShowArticleCard } from "./show-article-card";

export default function ShowAllArticles ({allTopics}) {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getAllArticles()
        .then((data) => {
            // console.log(data);
            setAllArticles(data)           
        })
    }, [])

    return (
        <section>
            <h2>All articles</h2>
            <select name="Sort By" id="">
            <option value="Topic">Topic Sort By</option>
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