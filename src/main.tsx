import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/body/body'
import Nav from './components/navbar/Nav'
import Footer from './components/footer/footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
