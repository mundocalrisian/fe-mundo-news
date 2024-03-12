import { useEffect, useState } from 'react'
import './App.css'
import { getAllTopics, getAllUsers } from './utils/api'
import Header from './components/header'
import { Sidebar } from './components/sidebar'
import ShowAllArticles from './components/show-all-articles'

function App () {
  const [allUsers, setAllUers] = useState([])
  const [user, setUser] = useState('Guest')
  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    getAllTopics()
    .then((data) => setAllTopics(data))
  }, [])


  return (
    <>
    <section className='grid-container'>
    <Header user={user}/>
    <Sidebar allTopics={allTopics}/>
    <ShowAllArticles allTopics={allTopics}/>
    </section>
    </>
  )
}

export default App
