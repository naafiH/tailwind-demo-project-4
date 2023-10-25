import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
