import { useEffect, useState } from "react"
import { sortByCommentCountAsc, sortByCommentCountDesc, sortByCreatedAsc, sortByCreatedDesc, sortByVotesAsc, sortByVotesDesc } from "../../utils/sort-by"
import Select from 'react-select'
import { ShowArticleCard } from "./show-article-card"

export function SortArticles({topicArticles, setTopicArticles}) {
    const [sortByOption, setSortByOption] = useState("DateDesc")
    
    const options = [
        {value:"DateAsc", label: "Date created (Ascending)"}, 
        {value:"DateDesc", label: "Date created (Descending)"}, 
        {value:"CommentAsc", label: "Number of Comments (Ascending)"}, 
        {value:"CommentDesc", label: "Number of Comments (Descending)"}, 
        {value:"VotesAsc", label: "Number of Votes (Ascending)"}, 
        {value:"VotesDesc", label: "Number of Votes (Descending)"}
    ]
    
    useEffect(() => {
        console.log(sortByOption, "sortby in useEffect");
        switch (sortByOption.value) {
            case "DateAsc":
                console.log("Date ASC");
                const createdAsc = sortByCreatedAsc(topicArticles)
                setTopicArticles(createdASC)
                break;
            case "DateDesc":
                console.log("Date DESC");
                const createdDesc = sortByCreatedDesc(topicArticles)
                setTopicArticles(createdDesc)
                break;
            case "CommentsAsc":
                {console.log("Comments ASC");
                const commentCountAsc = sortByCommentCountAsc(topicArticles)
                setTopicArticles(commentCountAsc)}
                break;
            case "CommentsDesc":
                console.log("Comments DESC");
                const commentCountDesc = sortByCommentCountDesc(topicArticles)
                setTopicArticles(commentCountDesc)
                break;
            case "VotesAsc":
                console.log("Votes ASC");
                const votesAsc = sortByVotesAsc(topicArticles)
                setTopicArticles(votesAsc)
                break;
            case "VotesDesc":
                console.log("Votes DESC");
                const votesDesc = sortByVotesDesc(topicArticles)
                setTopicArticles(votesDesc)
                break;
            default:
                break;
        }
    }, [sortByOption])
    
    // function handleSort (event) {
    //     console.log(event.target.value);
    // }

    return (
        <>
        <Select 
            className="sort-by-dropdown" 
            options={options}
            defaultValue={sortByOption}
            onChange={setSortByOption}
        />
        {/* <ShareButtons /> */}
        {topicArticles.map((article) => {
                    return (
                        <div key={article.article_id} className="article-card">
                        <ShowArticleCard article={article}/>
                    </div>
                )
            })}
        </>
    )


}
