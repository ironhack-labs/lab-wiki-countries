import {Switch,Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

const Routes = () => (
    <Switch>
        <Route exact path="/details" component={CountryDetails}/>
    </Switch>
)

export default Routes;