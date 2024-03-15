import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { capitaliseFirstLetter, dateToLocal } from "../../utils/utils";
import { ShowAllComments } from "../comments/show-all-comments";
import { patchCommentVote } from "../../utils/api";
import upArrow from '../../assets/arrow-round-top-icon.svg'
import downArrow from '../../assets/arrow-round-bottom-icon.svg'
import { SidebarContext } from "../../context/sidebar";
import { UserContext } from "../../context/user"
import { Login } from "../user/login";




export default function SingleArticle () {
    const [soloArticle, setSoloArticle] = useState({})
    const [isFetching, setIsFetching] = useState(true)
    const [articleVotes, setArticleVotes] = useState(soloArticle.votes)
    const [isUpClicked, setIsUpClicked] = useState(false)
    const [isDownClicked, setIsDownClicked] = useState(false)
    const [isErrorHidden, setIsErrorHidden] = useState(true)
    const [isVotesErrorHidden, setIsVotesErrorHidden] = useState(true)
    const {loggedInUserObj} = useContext(UserContext)
    const {isSidebarOpen} = useContext(SidebarContext)

    const articlesContainerClass = !isSidebarOpen ? "articles-container open" : "articles-container"
    
    const articleId = useParams().article_id

    const loggedInUsername = loggedInUserObj.username
    
    useEffect(() => {
        getArticleById(articleId)
        .then((article) => {
            setSoloArticle(article)
            setArticleVotes(article.votes)
            setIsFetching(false)
            setIsErrorHidden(true)
        })
        .catch((err) => {
        console.log(err, "error in solo article");
        setIsFetching(false)
        setIsErrorHidden(false)
        })
    }, [])

    function handleUpVote(article_id) {
        event.preventDefault()
        if (loggedInUsername !== 'Guest'){
            patchCommentVote(article_id, 1)
            .then((result) => {
                setArticleVotes(result.votes)
                setIsVotesErrorHidden(true)
            })
        } else {
            setIsVotesErrorHidden(false)
        }
    }

    function handleDownVote (article_id) {
        event.preventDefault()
        if (loggedInUsername !== 'Guest'){
            patchCommentVote(article_id, -1)
            .then((result) => {
                setArticleVotes(result.votes)
            })
        } else {
            setIsVotesErrorHidden(false)
        }
    }

    if (isFetching) {
        return (
            <section className={articlesContainerClass}>
                <div className="fetching-container">
                    <p>Hold tight, fetching article...</p>
                </div>
            </section>
        ) 
    }
    if (!isErrorHidden){
        return (
            <section className={articlesContainerClass}>
                <div hidden={isErrorHidden} className="error-container">
                    <p>Sorry, it seems that article doesn't exist</p>
                </div>
            </section>
        )
    }
    if (!isFetching && isErrorHidden){
    return (
        <section className={articlesContainerClass}>
            <div className="jump-to-header">
                <a href="#comments"><span className="bold-text">Jump to comments</span> </a>
            </div>
        <section className="article-card">
            <h2>{soloArticle.title}</h2>
                <p>Created by <span className="bold-text">{soloArticle.author}</span> on {dateToLocal(`${soloArticle.created_at}`)} in <Link to={`/articles/${soloArticle.topic}`}><span className="bold-text">{capitaliseFirstLetter(`${soloArticle.topic}`)}</span></Link></p>
                <p> </p>
            <img src={soloArticle.article_img_url} alt="" />
            <p>{soloArticle.body}</p>
            <div id="comments" className="article-card-comments">
                <p>Comments: {soloArticle.comment_count}</p>
                <form className="article-card-votes">
                    <input disabled={isUpClicked} onClick={(event) => { handleUpVote(articleId); setIsUpClicked(true)}} type="image" src={upArrow} name="up-vote" method="post"/>
                    <p className="votes-text">Votes: {articleVotes} </p>
                    <input disabled={isDownClicked} onClick={(event) => {handleDownVote(articleId); setIsDownClicked(true)}} type="image" src={downArrow} name="down-vote" method="post"/>
                </form>
            </div>
            <div hidden={isVotesErrorHidden} 
                className="comment-error">
                <p><span className="error-text">Please log in to vote</span></p>
            </div>
        </section>
        <ShowAllComments />
        </section>
    )
    }
}