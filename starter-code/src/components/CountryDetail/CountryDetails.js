import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route, Link} from 'react-router-dom'
import countries from '../../countries.json'
import MoreDetails from '../MoreDetails/MoreDetails'


class CountryDetails extends Component {

    constructor(){
        super()

        this.state = {countriesInfo : countries}
    }

    countriesList = () =>{


        let countryList = this.state.countriesInfo.map((eachCountry) => {
            return <Link className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`}>
                    <img src={`https://www.countryflags.io/${eachCountry.cca2}/shiny/64.png`}></img> {eachCountry.name.common}</Link> 

        }); return countryList


    }

    render(){

        return (
        
            <>
         
           <div>
                <div className="row">
                    <div className="col-5 scroll">
                        <h2>Country List</h2>
                        {this.countriesList()}                            
                    </div>
                    <div className="col-7">
                    <Switch>
                        <Route path="/:countryId" render={(props) => <MoreDetails {...props} countries={this.state.countriesInfo}/>} />
                    </Switch>
                    </div>
                </div>
                    </div>
                    
            </>
        )


    }

    
}

export default CountryDetails