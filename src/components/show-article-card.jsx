
export function ShowArticleCard ({article}) {
    console.log(article);
    return (
        <div>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} width="300px" alt="" />
            <p>Comments {article.comment_count}</p>
            <p>Votes {article.votes}</p>
            <button>Like</button>
        </div>
    )
}