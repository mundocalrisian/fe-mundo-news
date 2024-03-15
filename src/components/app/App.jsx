import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { getAllTopics, getAllUsers } from '../../utils/api'
import Header from '../header/header'
import { Sidebar } from '../sidebar/sidebar'
import ShowAllArticles from '../articles/show-all-articles'
import Home from '../home'
import SingleArticle from '../articles/single-article'
import { Login } from '../user/login'
import ShowTopicArticles from '../articles/show-topic-articles'

function App () {
  const [allUsers, setAllUers] = useState([])
  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    getAllTopics()
    .then((data) => setAllTopics(data))
  }, [])


  return (
      <section className='grid-container'>
        <Header/>
        <Sidebar allTopics={allTopics}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/articles' element={<ShowAllArticles allTopics={allTopics}/>} />
          <Route path='/articles/:topic' element={<ShowTopicArticles allTopics={allTopics}/>} />
          <Route path='/article/:article_id' element={<SingleArticle/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </section>  
  )
}

export default App
