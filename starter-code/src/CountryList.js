import React, {Component} from 'react';
import Countries from './countries.json';
import {Switch, Link, Route} from 'react-router-dom';
import SpecificCountry from './SpecificCountry';

class CountryList extends Component{
    state={
        countries: Countries,
        countryShown: ''
    }




    render(){
        
        return(
            <div>
             <Switch>
                        <Route path ="/specificCountry/:name" component={SpecificCountry}/>
            </Switch>
                    
            {this.state.countries.map((eachCountry, index)=>{
                return(
                    <div className="separateCountries">
                <span>
                    {eachCountry.flag}
                </span>
                <h3>        
                    <Link to={`/specificCountry/${eachCountry.name.official}`}>{eachCountry.name.official}</Link>

                </h3>
                </div>
                )
            })}
            </div>
            
        )
    }
}

export default CountryList;