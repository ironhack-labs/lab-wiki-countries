import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from "./Home/Home"
import countryDetail from "./Components/countryDetail"
const Routes = () => (
    <Switch>
    <Route exact path="/" component={Home}/>
    
    <Route path='/country/:cca3' component={countryDetail}/>
    />
    </Switch>
)
export default Routes;