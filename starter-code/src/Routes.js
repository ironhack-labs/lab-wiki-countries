import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MenuComponent from './components/MenuComponent'
import CountryDetail from './components/CountryDetail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const Routes = () =>(
    <BrowserRouter>
        <Route exact path="/" component={MenuComponent} />
        <Route exact path="/country/:cca3" component={CountryDetail} />
        
    </BrowserRouter>
)

export default Routes;