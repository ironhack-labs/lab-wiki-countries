import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { withRouter, Switch } from "react-router-dom";
import JSONcountries from './../countries.json';



/*
render a list of links used to trigger the browser URL change via the react-router-dom Link.
Click on a Link component will then activate the corresponding Route showing the country details component.
*/


export class CountriesList extends Component {

    state = {
        countriesListDisplayed: true,
    };

    toggleCountriesList = () => {
        console.log('pipou');
        this.setState({ countriesListDisplayed: !this.state.countriesListDisplayed })
    }

    render() {
        return (
            <div>
                {(!this.state.countriesListDisplayed) && (
                <NavLink to={`/countries`} onClick={this.toggleCountriesList}>Back to countries list por favor</NavLink>
                )}
                

                {(this.state.countriesListDisplayed) && (
                    <div>
                        {JSONcountries.map((country) => {
                            return (
                                <div key={country.uuid}>
                                    <NavLink to={`/countries/${country.cca3}`} onClick={this.toggleCountriesList}>{country.name.common}</NavLink>
                                </div>
                            );
                        })}
                    </div>)
                }

            </div>
        )
    }
}

export default CountriesList


