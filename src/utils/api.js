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