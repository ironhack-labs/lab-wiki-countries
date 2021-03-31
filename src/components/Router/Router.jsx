import { Route, Switch } from "react-router-dom"
import NotFound from "../NotFound/NotFound"

export default function Router() {
  return (
        <Switch>
            <Route exact path="/:country"/>
            <Route component={NotFound} />
        </Switch>
  )
}



