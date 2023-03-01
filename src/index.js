import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../src/components/App.jsx'

import "bootstrap/dist/css/bootstrap.css"

import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <App />
  </Router>
)

