import { useContext, useEffect, useState } from "react";
import { getTopicArticles } from "../../utils/api";
import { ShowArticleCard } from "./show-article-card";
import { useParams } from "react-router-dom";
import { ShareButtons } from "../share/share-buttons";
import Select from 'react-select'
import { sortByCommentCountAsc, sortByCommentCountDesc, sortByCreatedAsc, sortByCreatedDesc, sortByVotesAsc, sortByVotesDesc } from "../../utils/sort-by"
import { SidebarContext } from "../../context/sidebar";

export default function ShowTopicArticles ({allTopics}) {
    const [topicArticles, setTopicArticles] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [sortByOption, setSortByOption] = useState({value: 'DateDesc', label: 'Sort by most recent'})
    const {isSidebarOpen} = useContext(SidebarContext)

    const articlesContainerClass = !isSidebarOpen ? "articles-container open" : "articles-container"

    const topic = useParams().topic

    const options = [
        {value:"DateDesc", label: "Sort by most recent"}, 
        {value:"DateAsc", label: "Sort by oldest"}, 
        {value:"CommentsDesc", label: "Sort by most number of comments"}, 
        {value:"CommentsAsc", label: "Sort by least number of comments"}, 
        {value:"VotesDesc", label: "Sort by most number of votes"}, 
        {value:"VotesAsc", label: "Sort by least number of votes"}, 
    ]
    
    useEffect(() => {
        getTopicArticles(topic)
        .then((data) => {
            data.forEach((article) => {
                article.created_at = Date.parse(article.created_at)
            })
            setTopicArticles(data)
            setIsFetching(false)
        })
    }, [topic])

    useEffect(() => {

        switch (sortByOption.value) {
            case "DateAsc":
                const createdAsc = sortByCreatedAsc(topicArticles)
                setTopicArticles(createdAsc)
                break;
            case "DateDesc":
                const createdDesc = sortByCreatedDesc(topicArticles)
                setTopicArticles(createdDesc)
                break;
            case "CommentsAsc":
                const commentCountAsc = sortByCommentCountAsc(topicArticles)
                setTopicArticles(commentCountAsc)
                break;
            case "CommentsDesc":
                const commentCountDesc = sortByCommentCountDesc(topicArticles)
                setTopicArticles(commentCountDesc)
                break;
            case "VotesAsc":
                const votesAsc = sortByVotesAsc(topicArticles)
                setTopicArticles(votesAsc)
                break;
            case "VotesDesc":
                const votesDesc = sortByVotesDesc(topicArticles)
                setTopicArticles(votesDesc)
                break;
            
        }
    }, [sortByOption])


    if (isFetching) {
        return (
            <div className="fetching-container">
                <p>Hold tight, fetching articles...</p>
            </div>
        )
    } else {
        return (
            <section className={articlesContainerClass}>
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
            </section>
        )
    }

}