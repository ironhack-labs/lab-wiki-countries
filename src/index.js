import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';

import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

