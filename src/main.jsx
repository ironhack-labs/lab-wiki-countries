import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"

import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
