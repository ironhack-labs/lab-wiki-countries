import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu"
import Detail from "./components/Detail"

const Routes = () =>(
    <BrowserRouter>
        <Route exact path="/" component={Menu} />
        <Route exact path="/country/:cca3" component={Detail} />
    </BrowserRouter>
)

export default Routes