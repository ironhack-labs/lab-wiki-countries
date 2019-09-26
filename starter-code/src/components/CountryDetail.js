import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';


function CountryDetail (props){
    const getBorders = (countriesBorders) => {
        return countriesBorders.map(country => (
            countries.filter((e) => {
                return e.cca3 === country
            }).map((eachCountry)=>{
                return(
                  <li key={eachCountry.cca3}><Link to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>
                )
              })
        ))
    }

    const getCountry =  () => {
        const country = countries.find((element) => {
            return element.cca3 === props.match.params.id
        })    
        return (
            <div>
                <h1>{country.name.common}</h1>
                <div className="row property">
                    <div className="col-4">Capital:</div>
                    <div className="col-8">{country.capital}</div>
                </div>
                <div className="row property">
                    <div className="col-4">Area:</div>
                    <div className="col-8">{country.area}km&sup2;</div>
                </div>
                <div className="row property">
                    <div className="col-4">Borders:</div>
                    <div className="col-8">
                        <ul>
                            {getBorders(country.borders)}
                        </ul>
                    </div>
                </div>               
            </div>
            
        )
    }

    return getCountry()
    
}
export default CountryDetail;
