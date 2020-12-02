import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <App />
    </Router>
  </BrowserRouter>,
  document.getElementById('root')
)