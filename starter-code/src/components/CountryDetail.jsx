import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Countries from '../countries.json'
import FinerDetails from './FinerDetails'



class CountryDetail extends Component {

    state = {
        Countries,
    }

    countryList = () => {
        var countryList = this.state.Countries.map((eachCountry, i) => {
            return <Link key={i} className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`}>
                    {eachCountry.cca2} {eachCountry.name.common}</Link> 

        }); return countryList
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-5 scroll" >
                        <h2>| Country List</h2>
                        {this.countryList()}                            
                    </div>
                    <div className="col-7">
                    <Switch>
                        <Route path="/:countryId" render={(props) => <FinerDetails {...props} countries={this.state.Countries}/>} />
                    </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryDetail;
