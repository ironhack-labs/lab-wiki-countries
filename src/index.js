import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

// Router'
import { BrowserRouter as Router } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
