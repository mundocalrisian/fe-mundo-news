import upArrow from '../../assets/arrow-round-top-icon.svg'
import downArrow from '../../assets/arrow-round-bottom-icon.svg'
import { patchCommentVote } from '../../utils/api'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../../context/user"


export function ShowArticleCard ({article}) {
    const [articleVotes, setArticleVotes] = useState(article.votes)
    const [isUpClicked, setIsUpClicked] = useState(false)
    const [isDownClicked, setIsDownClicked] = useState(false)
    const [isVotesErrorHidden, setIsVotesErrorHidden] = useState(true)
    const {loggedInUserObj} = useContext(UserContext)

    const loggedInUsername = loggedInUserObj.username
    
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

    return (
        <>
            <h3><Link to={`/article/${article.article_id}`}>{article.title}</Link></h3>
            <Link to={`/article/${article.article_id}`}><img src={article.article_img_url} alt="" /></Link>
            <div className="article-card-comments">
                <p>Comments {article.comment_count} &#160;&#160;<a href={`/article/${article.article_id}`}>(view)</a></p>
                <form className="article-card-votes">
                    <input disabled={isUpClicked} onClick={(event) => { handleUpVote(article.article_id); setIsUpClicked(true)}} type="image" src={upArrow} name="up-vote" method="post"/>
                    <p>&#160;Votes: {articleVotes} &#160;</p>
                    <input disabled={isDownClicked} onClick={(event) => {handleDownVote(article.article_id); setIsDownClicked(true)}} type="image" src={downArrow} name="down-vote" method="post"/>
                </form>
            </div>
            <div hidden={isVotesErrorHidden} 
                className="comment-error">
                <p><span className="error-text">Please log in to vote</span></p>
            </div>
        </>
    )
}