import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,

  document.getElementById('root')
);


