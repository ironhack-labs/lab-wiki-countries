import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Countries } from './pages/Countries';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

export const App = () => (
    <Router>
        <Route path="/" exact component={() => <Countries />}></Route>
        <Route path="/:country_code" component={() => <Countries />}></Route>
    </Router>
)

export default App;
