// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={{}}>
    <CssBaseline />
    <Router>
      <Navbar />
      <App />
    </Router>
  </ThemeProvider>
);

reportWebVitals();
