import React, {useState, useEffect} from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function Navbar(){
    return (
        <nav class="navbar navbar-dark navbar-right bg-primary">
            <div class="container">
                <Link class="navbar-brand" to="/"> WikiCountries </Link>
            </div>
        </nav>
    )
}

export default Navbar