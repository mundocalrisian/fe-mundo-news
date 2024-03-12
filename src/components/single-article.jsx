import { useParams } from "react-router-dom";
import { ShowArticleCard } from "./show-article-card";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { capitaliseFirstLetter, dateToLocal } from "../utils/utils";

export default function SingleArticle () {
    const [soloArticle, setSoloArticle] = useState({})
    const [allComments, setAllComments] = useState([])
    

    const articleId = useParams().article_id
    
    useEffect(() => {
        getArticleById(articleId)
        .then((article) => {
            setSoloArticle(article)
        })
    }, [])

    return (
        <section className="articles-container">
        <section className="article-card">
            <h2>{soloArticle.title}</h2>
                <p>Created by 'User' on {dateToLocal(`${soloArticle.created_at}`)} in <a href={`/articles/${soloArticle.topic}`}>{capitaliseFirstLetter(`${soloArticle.topic}`)}</a></p>
                <p> </p>
            <img src={soloArticle.article_img_url} alt="" />
            <p>{soloArticle.body}</p>
            <div className="article-card-comments">
                <p>Comments: {soloArticle.comment_count}</p>
                <div className="article-card-votes">
                    <p>votes</p>
                    <button>Like</button>
                </div>

            </div>
        </section>
        </section>
    )
}