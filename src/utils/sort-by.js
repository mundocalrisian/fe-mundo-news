import { dateUnixToLocal } from "./utils"

export function sortByCommentCountAsc (articlesArr) {
    const sortByCommentCountAsc = [...articlesArr]
    sortByCommentCountAsc.sort((a, b) => a.comment_count - b.comment_count)
    return sortByCommentCountAsc
}

export function sortByCommentCountDesc (articlesArr) {
    const sortByCommentCountDesc = [...articlesArr]
    sortByCommentCountDesc.sort((a, b) => b.comment_count - a.comment_count)
    return sortByCommentCountDesc
}

export function sortByVotesAsc (articlesArr) {
    const sortByVotesAsc = [...articlesArr]
    sortByVotesAsc.sort((a, b) => a.votes - b.votes)
    return sortByVotesAsc
}

export function sortByVotesDesc (articlesArr) {
    const sortByVotesDesc = [...articlesArr]
    sortByVotesDesc.sort((a, b) => b.votes - a.votes)
    return sortByVotesDesc
}

export function sortByCreatedAsc (articlesArr) {
    const createdAsc = [...articlesArr]
    // createdAsc.forEach((article) => {
    //     article.created_at = Date.parse(article.created_at)
    // })

    createdAsc.sort((a, b) => a.created_at - b.created_at)

    // createdAsc.forEach((article) => {
    //     article.created_at = dateUnixToLocal(article.created_at)
    // })

    return createdAsc
}

export function sortByCreatedDesc (articlesArr) {
    const sortByCreatedDesc = [...articlesArr]
    // sortByCreatedDesc.forEach((article) => {
    //     article.created_at = Date.parse(article.created_at)
    // })

    sortByCreatedDesc.sort((a, b) => b.created_at - a.created_at)

    // sortByCreatedDesc.forEach((article) => {
    //     article.created_at = dateUnixToLocal(article.created_at)
    // })
    return sortByCreatedDesc
}

