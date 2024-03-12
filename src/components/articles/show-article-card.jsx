
export function ShowArticleCard ({article}) {
    // console.log(article);
    return (
        <>
            <h3><a href={`/article/${article.article_id}`}>{article.title}</a></h3>
            <a href={`/article/${article.article_id}`}><img src={article.article_img_url} alt="" /></a>
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