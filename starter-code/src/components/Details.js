import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";
import CountryDetails from '../components/CountryDetails';

function Details(props) {
  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);

  const borderCountry = foundCountry.borders

  
  return (
     
  
        <div className='flex_direction'>
            <div className='col'>
                <h1>{foundCountry.flag} {foundCountry.name.common}</h1>
                <h3>{foundCountry.capital}</h3>
                <h3>{foundCountry.area} km<sup>2</sup></h3>

                <h2>Borders:</h2>
              
                     {borderCountry.length ? (
                        borderCountry.map(countryCode => {
                    return (
                        <div key={countryCode}>
                            <h5><Link to={`/${getCountry(countryCode).cca3}`}>
                         <div key={countryCode}>
                            <h5 className="links">{getCountry(countryCode).name.common}</h5>
                            <hr></hr>
                        </div>
                        </Link></h5>
                        </div>
                    )
                    } )
                      ) : <h4>¡Has no borders!</h4>
                     
                     }
                    
            </div>
        </div>
  )


}



export default Details;
