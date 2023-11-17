import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import Button from './components/Button'
// import Table from './components/Table'
// import Image from './components/views/Image'
import Article from './components/Article'
import Data from './components/Data'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Data />
    
    <Article title = "Lorem Firstum" article = "Firstum ut mollit sint fugiat excepteur elit enim dolor sint mollit excepteur irure eu."/>
    <Article title = "Lorem Secundum" article = "Lorem Secundum velit ad velit commodo adipisicing quis nisi culpa voluptate et dolore enim. ."/>
 
  </React.StrictMode>,
)
