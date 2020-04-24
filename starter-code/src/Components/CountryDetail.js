import React, { Component } from 'react';
import countries from '../countries';
import {Link} from "react-router-dom";

class  CountryDetail extends Component{

    
    render() {
    const country = id => countries.find(aCountry => aCountry.cca3 === id);
    const { params } = this.props.match;
    //console.log(country(params.id))
    const foundCountry = country(params.id)
    //console.log(foundCountry);
        return(
            <div>
                <h1>{foundCountry.name.common}</h1>
                <h3>Capital:    {foundCountry.capital}</h3>
                <h3>Area:      {foundCountry.area} km <sup>2</sup></h3>
                <h3>Borders: </h3><br></br>
                <ul>{foundCountry.borders.map((item, index) => {
                    return <li key={index}><Link to={item}>{country(item).name.common}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default CountryDetail;