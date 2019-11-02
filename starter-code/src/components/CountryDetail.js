import React from 'react';
import { Link, useParams } from "react-router-dom";

const CountryDetail = (props) => {
    let { id } = useParams();
    let countryList = props.list;

    let clickedCountry = countryList.filter((country) => {
        return id === country.cca3;
    })

    

  return (
    <div>
        <h1>{clickedCountry[0].name.common}</h1>
        <hr></hr>
        <p> Capital: {clickedCountry[0].capital}</p>
        <p> Area: {clickedCountry[0].area}</p>
        <p> Borders: </p>
        {clickedCountry[0].borders.map((border,idx)=>{

            let borderCountry = countryList.filter((country) => {
                return border === country.cca3;
            })

            return(
                <div key={idx}>
                    <Link to={`/countryDetail/${border}`} className="list-group-item list-group-item-action">
                        {borderCountry[0].name.common}
                    </Link>
                </div>
            )
            
        })}

    </div>
  )
}

export default CountryDetail;