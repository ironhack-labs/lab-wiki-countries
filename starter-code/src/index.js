import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter} from "react-router-dom"

const WithRouter = ()=> (
    <BrowserRouter >
        <App />
    </BrowserRouter>
)



ReactDOM.render(

    <WithRouter />, 
    document.getElementById('root'));
