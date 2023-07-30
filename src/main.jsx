import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
 
// Next, wrap the <App /> with the <Router> and </Router> tags
 
root.render(
  <React.StrictMode>
    <Router>                            
      <App />
    </Router>                      
  </React.StrictMode>
);
 