import { useContext, useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { ShowArticleCard } from "./show-article-card";
import { ShareButtons } from "../share/share-buttons";
import Select from 'react-select'
import { sortByCommentCountAsc, sortByCommentCountDesc, sortByCreatedAsc, sortByCreatedDesc, sortByVotesAsc, sortByVotesDesc } from "../../utils/sort-by"
import { SidebarContext } from "../../context/sidebar";

export default function ShowAllArticles ({allTopics}) {
    const [allArticles, setAllArticles] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [sortByOption, setSortByOption] = useState({value: 'DateDesc', label: 'Sort by most recent'})
    const {isSidebarOpen} = useContext(SidebarContext)

    const articlesContainerClass = !isSidebarOpen ? "articles-container open" : "articles-container"
    
    useEffect(() => {
        getAllArticles()
        .then((data) => {
            data.forEach((article) => {
                article.created_at = Date.parse(article.created_at)
            })
            setAllArticles(data)
            setIsFetching(false)
        })
    }, [isSidebarOpen])

    const options = [
        {value:"DateDesc", label: "Sort by most recent"}, 
        {value:"DateAsc", label: "Sort by oldest"}, 
        {value:"CommentsDesc", label: "Sort by most number of comments"}, 
        {value:"CommentsAsc", label: "Sort by least number of comments"}, 
        {value:"VotesDesc", label: "Sort by most number of votes"},
        {value:"VotesAsc", label: "Sort by least number of votes"}, 
    ]

    useEffect(() => {

        switch (sortByOption.value) {
            case "DateAsc":
                const createdAsc = sortByCreatedAsc(allArticles)
                setAllArticles(createdAsc)
                break;
            case "DateDesc":
                const createdDesc = sortByCreatedDesc(allArticles)
                setAllArticles(createdDesc)
                break;
            case "CommentsAsc":
                const commentCountAsc = sortByCommentCountAsc(allArticles)
                setAllArticles(commentCountAsc)
                break;
            case "CommentsDesc":
                const commentCountDesc = sortByCommentCountDesc(allArticles)
                setAllArticles(commentCountDesc)
                break;
            case "VotesAsc":
                const votesAsc = sortByVotesAsc(allArticles)
                setAllArticles(votesAsc)
                break;
            case "VotesDesc":
                const votesDesc = sortByVotesDesc(allArticles)
                setAllArticles(votesDesc)
                break;
            
        }
    }, [sortByOption])

    
    if (isFetching) {
        return (
        <div className="articles-container">
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
                {allArticles.map((article) => {
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