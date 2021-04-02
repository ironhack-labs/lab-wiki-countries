import { Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails'
export default function Router() {
  return (
    <Switch>
      <Route exact paht="/:id/country" component={CountryDetails} />
    </Switch>
  );
}
