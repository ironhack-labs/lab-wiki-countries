import React from 'react'
import Countries from "../countries.json"
import {Route, Switch} from "react-router";
import { Link, NavLink } from 'react-router-dom';
import CountryDetails from "./CountryDetails"
import 'bootstrap/dist/css/bootstrap.css';
export default class CountriesList extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        countries: Countries

        };
    }

    render() {
       
        return(

            
        this.state.countries.map((country, index) => 
        {
            return(
            <div>  
           
            <table>
              
                <tr>
                <td><Link key={country.cca3} to={`/CountryDetails/${country.cca3}`}>{country.name.common}</Link> </td>
                <td>{country.flag}</td>
                <td>{country.currency}</td>
                </tr>
            </table>
            </div>
            
            
        )})
        )
    }
}
