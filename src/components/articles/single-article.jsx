import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { capitaliseFirstLetter, dateToLocal } from "../../utils/utils";
import { ShowAllComments } from "../comments/show-all-comments";
import { patchCommentVote } from "../../utils/api";
import upArrow from '../../assets/arrow-round-top-icon.svg'
import downArrow from '../../assets/arrow-round-bottom-icon.svg'

export default function SingleArticle () {
    const [soloArticle, setSoloArticle] = useState({})
    const [isFetching, setIsFetching] = useState(true)
    const [articleVotes, setArticleVotes] = useState(soloArticle.votes)
    
    const articleId = useParams().article_id
    
    useEffect(() => {
        getArticleById(articleId)
        .then((article) => {
            setSoloArticle(article)
            setArticleVotes(article.votes)
            setIsFetching(false)
        })
    }, [])

    function handleUpVote(article_id) {
        event.preventDefault()
        patchCommentVote(article_id, 1)
        .then((result) => {
            // console.log(result.votes);
            setArticleVotes(result.votes)
        })
    }

    function handleDownVote (article_id) {
        event.preventDefault()
        patchCommentVote(article_id, -1)
        .then((result) => {
            // console.log(result.votes);
            setArticleVotes(result.votes)
        })
    }

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
                <form className="article-card-votes">
                    <input onClick={(event) => { handleUpVote(articleId)}} type="image" src={upArrow} name="up-vote" method="post"/>
                    <p>&#160;Votes: {articleVotes} &#160;</p>
                    <input onClick={(event) => {handleDownVote(articleId)}} type="image" src={downArrow} name="down-vote" method="post"/>
                </form>
            </div>
        </section>
        <ShowAllComments />
        </section>
    )
    }
}