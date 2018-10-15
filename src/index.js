import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './style.css';
import App from './components/App.js';


ReactDOM.render((
  <BrowserRouter>
  <App/>
  </BrowserRouter>
),
document.getElementById('root')

);
