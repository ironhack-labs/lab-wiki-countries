import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu  from './components/Menu'
import Detail from './components/CountryDetail'

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route path="/country/:cca3" component={Detail}/>
    </BrowserRouter>
);

export default Routes;