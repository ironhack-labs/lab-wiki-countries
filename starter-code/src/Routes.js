import React from "react"
import { Route, Switch } from "react-router-dom"
import CountryDetail from "./components/CountryDetail"

export default function() {
  return (
    <Switch>
      <Route exact path="/:cca3" component={CountryDetail} />
      <Route component={() => <div>404</div>} />
    </Switch>
  )
}
