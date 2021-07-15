import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';

import { BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
