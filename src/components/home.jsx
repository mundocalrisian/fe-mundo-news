import { Routes, Route } from "react-router-dom"
import Header from "./header/header"
import { Sidebar } from "./sidebar"
import ShowAllArticles from "./articles/show-all-articles"

export default function Home ({user, allTopics}) {
     return (
        <ShowAllArticles/>
)
}