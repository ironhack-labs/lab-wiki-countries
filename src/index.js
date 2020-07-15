import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


