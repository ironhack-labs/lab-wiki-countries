import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom';


export const CountryDetails = ({countryArr}) => {
  let { id } = useParams();

    const myCountry = countryArr.filter((elem) => {
        return (elem.alpha3Code === id)
    });
      
    console.log(myCountry[0].name.common)

  return (
    <div>
        <h1>Name</h1>
        <div>{myCountry[0].name.common}</div>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry[0].alpha2Code.toLowerCase()}.png`} alt={myCountry[0].name.common}></img>
        <div>Capital</div>
            <div>
            {myCountry[0].capital.map((border) => (
                <div>
                    {border}
                </div>
            ))}
            </div>
        <h1>Area</h1>
        <div>{myCountry[0].area}</div>
    </div>
  )
}

export default CountryDetails