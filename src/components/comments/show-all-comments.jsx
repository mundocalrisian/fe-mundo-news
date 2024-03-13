import "./comment-card.css"
import { useEffect, useState } from "react"
import { getAllComments } from "../../utils/api"
import { useParams } from "react-router-dom"
import { dateToLocal } from "../../utils/utils"

export function ShowAllComments () {
    const [allComments, setAllComments] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const articleId = useParams().article_id

    useEffect(() => {
        getAllComments(articleId)
        .then((data) => {
            setAllComments(data)
            setIsFetching(false)
        })
    }, [articleId])

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
            <form className="submit-comments">
                <label htmlFor="add-comment">Add a comment</label>
                <input id="add-comment" type="text" />
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