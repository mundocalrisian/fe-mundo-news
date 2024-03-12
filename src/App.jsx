import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { getAllTopics, getAllUsers } from './utils/api'
import Header from './components/header'
import { Sidebar } from './components/sidebar'
import ShowAllArticles from './components/show-all-articles'
import Home from './components/home'
import SingleArticle from './components/single-article'

function App () {
  const [allUsers, setAllUers] = useState([])
  const [user, setUser] = useState('Guest')
  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    getAllTopics()
    .then((data) => setAllTopics(data))
  }, [])


  return (
    <section className='grid-container'>
      <Header user={user}/>
      <Sidebar allTopics={allTopics}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/articles' element={<ShowAllArticles allTopics={allTopics}/>} />
        <Route path='/article/:article_id' element={<SingleArticle/>}/>
      </Routes>
    </section>
      
  )
}

export default App
