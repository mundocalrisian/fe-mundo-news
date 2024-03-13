import "./comment-card.css"
import { useContext, useEffect, useState } from "react"
import { getAllComments, postComment } from "../../utils/api"
import { useParams } from "react-router-dom"
import { dateToLocal } from "../../utils/utils"
import { UserContext } from "../../context/user"

export function ShowAllComments () {
    const [allComments, setAllComments] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [tempComment, setTempComment] = useState("")
    const articleId = useParams().article_id
    const {loggedInUser} = useContext(UserContext)
    // console.log(loggedInUser, "-----user in the comments");

    useEffect(() => {
        getAllComments(articleId)
        .then((data) => {
            setAllComments(data)
            setIsFetching(false)
        })
    }, [articleId])

    function handleSubmit (event) {
        event.preventDefault()
        // console.log(tempComment, "when submitted");
        postComment(articleId, loggedInUser, tempComment)
        .then((data)=>{
            // console.log(data, "----in comments from api");
            setTempComment("")

            setAllComments((currComments) => {
                return [data, ...currComments]
            })
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
                <label htmlFor="add-comment">Add a comment</label>
                <textarea multiline="true" id="add-comment" type="text" value={tempComment} onChange={(event) => {setTempComment(event.target.value)}}/>
                <button type="submit">Add</button>
            </form>
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
                            {/* <button>Delete Comment</button> */}
                        </div>
                    )
                })}
        </ul>
        </section>
    )
    }
}