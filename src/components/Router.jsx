import { Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails'
export default function Router() {
  return (
    <Switch>
      <Route exact paht="/country/:id" component={CountryDetails} />
    </Switch>
  );
}
