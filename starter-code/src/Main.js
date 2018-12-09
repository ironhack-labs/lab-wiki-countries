import React, {Component} from 'react';
import CountryList from './CountryList';
import {Switch, Route} from 'react-router-dom';
import SpecificCountry from './SpecificCountry';

class Main extends Component{

    render(){
        return(
        <div>
            <nav>
                <h1>WikiCountries</h1>
            </nav>
            <CountryList />
        </div>
            
        )
    }
}

export default Main;