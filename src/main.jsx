import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/App.jsx'
import './index.css'
import { UserProvider } from './context/user.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserProvider>
)

