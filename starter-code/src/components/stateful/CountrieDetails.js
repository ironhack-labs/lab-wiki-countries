import React from 'react';
import countriesJson from '../../countries.json'
import {Link} from 'react-router-dom';

const CountryDetail = (props) => {

    const country = countriesJson[props.match.params.id]
    const findBorder = (retroBorder) => {
      let retroCountry = countriesJson.find( elm => elm.cca3 === retroBorder)
      return countriesJson.indexOf(retroCountry)
    }

    
    return (
      <div className="col-md-6">
        
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
        <div className="row">{country.borders.map(elm => {
        
        return <div className="col-md-3"><Link to={`/${findBorder(elm)}`}>{countriesJson[findBorder(elm)].name.common}</Link></div>
        
        })}</div>
      </div>
    )
  }


export default CountryDetail