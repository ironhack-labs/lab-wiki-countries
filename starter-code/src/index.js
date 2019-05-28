import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);

