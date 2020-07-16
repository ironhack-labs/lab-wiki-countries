import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { NavLink, Switch } from 'react-router-dom'


import countries from "../../countries.json"
import CountryDetail from './../CountryDetail/CountryDetail'


class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }


    render() {

        return (
            <>
                <div className="col-sm-5">
                    {this.state.countries.map((elm, idx) => <NavLink key={idx} to={`/detail/${elm.cca3}`} className="list-group-item list-group-item-action">
                        <img alt={elm.name} style={{ width: "20px" }} src={`https://www.countryflags.io/${elm.cca2}/flat/64.png`} />
                        <small>{elm.cca3} </small>
                        {elm.name.common}

                    </NavLink>
                    )}
                </div>

                <div className="col-sm-7">
                    <Switch>
                        <Route exact path="/detail/:id" render={(props) => <CountryDetail {...props} country={this.state.countries} />} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default CountriesList
