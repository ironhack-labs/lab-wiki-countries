import React, { Component } from 'react'
import { NavLink, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'

import CountryDetail from './../CountryDetail/CountryDetail'

import countries from './../../countries'

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }


    render() {
        // console.log(this.state.countries)
        return (
            <>
                <div style={{ paddingTop: "30px", paddingLeft: "30px", overflow: "scroll", maxHeight: "90vh " }} className="col-sm-5">
                    {this.state.countries.map((elm, idx) => <NavLink key={idx} to={`/detail/${elm.cca3}`} className="list-group-item list-group-item-action">
                        <img alt={elm.name} style={{ width: "25px" }} src={`https://www.countryflags.io/${elm.cca2}/flat/64.png`} />
                        <small>{elm.cca3} </small>
                        {elm.name.common}

                    </NavLink>
                    )}
                </div>
                <div className="col-sm-7">
                  <Switch>
                    <Route exact path="/detail/:id" render={(props) => <CountryDetail {...props} country={this.state.countries} />
                    } />
                    </Switch>
                </div>

            </>
        )
    }
}

export default CountriesList