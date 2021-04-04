import { Route, Switch } from "react-router-dom";
import CountryDetails from './CountryDetails'
import NotFound from './NotFound'

export default function Router() {
  return (
    <Switch>
      <Route exact path="/:code" component={CountryDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}