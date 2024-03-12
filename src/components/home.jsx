import { Routes, Route } from "react-router-dom"
import Header from "./header"
import { Sidebar } from "./sidebar"
import ShowAllArticles from "./show-all-articles"

export default function Home ({user, allTopics}) {
     return (
        <ShowAllArticles/>
)
}