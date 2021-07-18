import React , { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css';


import countriesData from "../countries.json";




function HomePage(props) {

    return (
        <div className="col-9 m-0 p-5">
            <h1>Welcome to the Countries Wiki!</h1>
        </div>

    )
}

export default HomePage;