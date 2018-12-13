import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Home/Detail';

const Routes = () => (
    <Switch>
        <Route path="/" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
    </Switch>
)

export default Routes