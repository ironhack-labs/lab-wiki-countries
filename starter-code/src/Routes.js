import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Menu from './components/MenuComponent'
import CountryDetail from './components/CountryDetail';


const Routes = () => (
<BrowserRouter>
    <Route path='/' component={Menu}/>
    <Route path='/country/:cca3' component= { CountryDetail } />
    
</BrowserRouter>
);


 
export default Routes;

