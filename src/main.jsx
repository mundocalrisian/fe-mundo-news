import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/App.jsx'
import './index.css'
import { UserProvider } from './context/user.jsx'
import { SidebarProvider } from './context/sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
  <UserProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserProvider>
  </SidebarProvider>
)

