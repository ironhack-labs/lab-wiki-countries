import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CountryDetail } from './components/CountryDetail';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

export const App = () => (
    <Router>
        <Switch>
            <Route path="/:country_code" component={() => <CountryDetail />}></Route>
        </Switch>
    </Router>
)

export default App;
