import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)