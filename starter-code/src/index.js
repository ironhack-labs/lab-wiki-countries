import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import CountryDetail from "./components/CountryDetail"

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/country-detail" component={CountryDetail} />
    </Switch>
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
