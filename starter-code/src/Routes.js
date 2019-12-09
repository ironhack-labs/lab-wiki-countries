import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu  from './components/Menu'
import CountryDetail from './components/CountryDetail';

const Routes = () => (
    <BrowserRouter >
    <div 
        style= {{
            display: 'flex',
        }}
    >
        <Route path="/" component={Menu} />
        <Route path="/country/:cca3" component={CountryDetail}/>
    </div>
    </BrowserRouter>
);

export default Routes;