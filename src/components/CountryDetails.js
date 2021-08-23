import React from 'react'
import '../App.css'

export default function CountryDetails(props) {
    return (
        <>
      <div className="country-info">
        <div>
          <h2>{props.name.common}</h2>
        </div>
        <div>
          <h5>Capital: {props.capital}</h5>
        </div>
        <div>
          <h5>Area: {props.area}km2</h5>
        </div>
        <div>
          <h5>Borders:</h5>
          <ul>
            {props.borders.map((border) => {
              return <li>{border}</li>;
            })}
          </ul>
        </div>
      </div>
      </>
    );
}

