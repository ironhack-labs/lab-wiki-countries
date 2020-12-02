import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(

  <BrowserRouter>

    <React.StrictMode>

      <App />

    </React.StrictMode>

  </BrowserRouter>,

  document.getElementById('root')

);

