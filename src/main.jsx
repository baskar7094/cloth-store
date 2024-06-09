import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.scss'
import ElementView from './element/ElementView.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ElementView /> */}
    <App/>
  </React.StrictMode>,
)
