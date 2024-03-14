import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-b3bj.onrender.com/api'
})

export function getAllUsers () {
    return ncNewsApi.get('/users')
    .then((results) => {
        return results.data.users
    })
}

export function getAllTopics () {
    return ncNewsApi.get('/topics')
    .then((results) => {
        return results.data.topics
    })
}

export function getAllArticles () {
    return ncNewsApi.get('/articles')
    .then((results) => {
        return results.data.articles
    })
}

export function getTopicArticles (topic) {
    return ncNewsApi.get(`/articles?topic=${topic.toLowerCase()}`)
    .then((results) => {
        return results.data.articles
    })
}

export function getArticleById (articleId) {
    return ncNewsApi.get(`/articles/${articleId}`)
    .then((result) => {
        return result.data.article
    })
}

export function getAllComments (articleId) {
    return ncNewsApi.get(`/articles/${articleId}/comments`)
    .then((results) => {
        return results.data.comments
    })
}

export function postComment (articleId, user, comment) {
    const postBody = {author: user, body: comment};
    // console.log(postBody, "----postbody in API");
    return ncNewsApi.post(`/articles/${articleId}/comments`, postBody)
    .then((result)=>{
        // console.log(result.data.postedComment, "api repsonse (comment)");
        return result.data.postedComment
    })
}

export function patchCommentVote (articleId, vote) {
    const postBody = {inc_votes: vote};
    return ncNewsApi.patch(`/articles/${articleId}`, postBody)
    .then((result) => {
        return result.data.updated_article
    })
}

export function deleteComment (commentId) {
    return ncNewsApi.delete(`/comments/${commentId}`)
    .then((result)=>{
        return result.status
    })
}


