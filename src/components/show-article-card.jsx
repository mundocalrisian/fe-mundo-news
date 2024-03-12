
export function ShowArticleCard ({article}) {
    // console.log(article);
    return (
        <>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt="" />
            <div className="article-card-comments">
                <p>Comments {article.comment_count}</p>
                <div className="article-card-votes">
                    <p>Votes {article.votes}</p>
                    <button>Like</button>
                </div>
            </div>
        </>
    )
}