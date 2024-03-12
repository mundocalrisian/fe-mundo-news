import { useParams } from "react-router-dom";
import { ShowArticleCard } from "./show-article-card";
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { capitaliseFirstLetter, dateToLocal } from "../../utils/utils";
import { ShowAllComments } from "../comments/show-all-comments";

export default function SingleArticle () {
    const [soloArticle, setSoloArticle] = useState({})
    const [isFetching, setIsFetching] = useState(true)
    
    const articleId = useParams().article_id
    
    useEffect(() => {
        getArticleById(articleId)
        .then((article) => {
            setSoloArticle(article)
            setIsFetching(false)
        })
    }, [])

    if (isFetching) {
        return (
        <div>
            <p>Fetching articles...</p>
        </div>
        ) 
    }
    else {
    return (
        <section className="articles-container">
        <section className="article-card">
            <h2>{soloArticle.title}</h2>
                <p>Created by <span className="bold-text">'User'</span> on {dateToLocal(`${soloArticle.created_at}`)} in <a href={`/articles/${soloArticle.topic}`}><span className="bold-text">{capitaliseFirstLetter(`${soloArticle.topic}`)}</span></a></p>
                <p> </p>
            <img src={soloArticle.article_img_url} alt="" />
            <p>{soloArticle.body}</p>
            <div className="article-card-comments">
                <p>Comments: {soloArticle.comment_count}</p>
                <div className="article-card-votes">
                    <p>Votes {soloArticle.votes}</p>
                    <button>Like</button>
                </div>

            </div>
        </section>
        <ShowAllComments />
        </section>
    )
    }
}