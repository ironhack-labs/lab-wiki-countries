import { Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails'

export default function Routerr({countries}) {
  return (
    <Switch>
      <Route path="/:id" children={<CountryDetails countries={countries}/>} />
    </Switch>
  );
}
