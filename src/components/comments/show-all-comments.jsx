import "./comments.css"
import { useContext, useEffect, useState } from "react"
import { deleteComment, getAllComments, postComment } from "../../utils/api"
import { useParams } from "react-router-dom"
import { dateToLocal } from "../../utils/utils"
import { UserContext } from "../../context/user"

export function ShowAllComments () {
    const [allComments, setAllComments] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [tempComment, setTempComment] = useState("")
    const articleId = useParams().article_id
    const {loggedInUserObj} = useContext(UserContext)
    const [commentIdToDelete, setCommentIdToDelete] = useState(-1)
    const [isCommentErrorHidden, setIsCommentErrorHidden] = useState(true)
    const [isDeleteErrorHidden, setIsDeleteErrorHidden] = useState(true)

    const loggedInUsername = loggedInUserObj.username    

    useEffect(() => {
        getAllComments(articleId)
        .then((data) => {
            setAllComments(data)
            setIsFetching(false)
        })
    }, [articleId])

    function handleSubmit (event) {
        event.preventDefault()
        postComment(articleId, loggedInUserObj.username, tempComment)
        .then((data)=>{
            console.log(data, "-----new Comment");
            setTempComment("")
            setAllComments((currComments) => {
                return [data, ...currComments]
            })
        })
        .catch((err) => {
            console.log(err, "----in comment submit");
            if (err.response.status === 404) setIsCommentErrorHidden(false)
        })
    }

    function handleDelete (event) {
        event.preventDefault()
        setCommentIdToDelete(event.target.value)
        deleteComment(event.target.value)
        .then((status) => {
            if (status === 204){
                setIsDeleteErrorHidden(true)
                let deletedCommentIndex = 0
                allComments.forEach((comment, index) => {
                    if (comment.comment_id === commentIdToDelete){
                        deletedCommentIndex = index
                    }
                })
                const currComments = [...allComments]
                const tempAllComments = [...allComments]
                tempAllComments.splice(deletedCommentIndex, 1)
                setAllComments(tempAllComments)
            }
        })
        .catch((err) =>{
            console.log(err, "<----- error in comment delete");
            if (err.response.status === 400) setIsDeleteErrorHidden(false)
            if (err.response.status === 404) setIsDeleteErrorHidden(false)
        })
    }

    if (isFetching) {
        return (
        <div>
            <p>Fetching comments...</p>
        </div>
        ) 
    }
    else {
    return (
        <section className="comments-container">
            <form onSubmit={(event) => {handleSubmit(event)}} className="submit-comments">
                <label htmlFor="add-comment"><span className="bold-text">Add a comment</span></label>
                <textarea multiline="true" id="add-comment" type="text" required value={tempComment} onChange={(event) => {setTempComment(event.target.value)}}/>
                <button type="submit">Add</button>
            </form>
            <p hidden={isCommentErrorHidden}><span className="error-text">Please log in to add a comment</span></p>
        <ul>
            {allComments.map((comment) => {
                return (
                    <div key={comment.comment_id} className="comment-card">
                        <div>
                            <p><span className="bold-text">{comment.author}</span>, {dateToLocal(comment.created_at)}</p>
                            <p>Votes: {comment.votes}</p>
                        </div>
                        <p>{comment.body}</p>
                        <p>{}</p>
                        <button onClick={(event) => {console.log(comment.comment_id); handleDelete(event)}}  value={comment.comment_id} hidden={loggedInUsername !== comment.author}>Delete Comment</button>
                        {comment.comment_id === Number(commentIdToDelete) ? <p hidden={isDeleteErrorHidden}><span className="error-text">Sorry, something went wrong, please try to delete again</span></p> : <></>}
                    </div>
                )
            })}
        </ul>
        </section>
    )
    }
}