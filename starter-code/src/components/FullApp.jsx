import React, { Component } from 'react'
import countries from '../countries.json';
import CountryDetail from './CountryDetail';
import {Link, Switch, Route} from 'react-router-dom';



export default class FullApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentCountry: countries[0],
        }
    }

    displayCountries = () => {
        let firstHalf = "https://www.countryflags.io/";
        let secondHalf = "/flat/32.png";
        return countries.map((eachCountry) => {

            return (
                    <tr key={eachCountry.cca2}>
                        <td>
                            <Link to = {"/country/" + eachCountry.cca3}>
                                <img src={firstHalf + eachCountry.cca2 + secondHalf}/> <span>{eachCountry.name.common}</span>
                            </Link>
                        </td>
                    </tr>
            )  
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <span className="navbar-brand mb-0 h1">WikiCountries</span>
                </nav>
                <div className="container-fluid the-page">
                    <div className="row">
                        <div className="col-4 pre-scrollable">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Countries</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.displayCountries()}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-8">
                        <Switch>
                            <Route exact path="/country/:id" render ={ props => 
                                <CountryDetail
                                    {...props}
                                    countries= {countries}
                                    /> } /> 
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
