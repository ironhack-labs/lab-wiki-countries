import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CountryService from '../services/CountryService';

export default function CountryDetails({name, alpha3Code, alpha2Code, capital, area, borders}) {
  console.log({borders: borders, name: name, code2: alpha2Code, code3: alpha3Code});

  const displayBorder = () => {
    return borders.map((border, i) => {
        return <li key={i}><Link to={`/${border}`}>{border}</Link></li> 
        
    })
  }

  return (
    <div>
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={name.official}/>
            <h3>{name.official}</h3>
        </div>
        <div className="country-info">
            <div>
                <p>Capital</p>
                <p>{capital}</p>
            </div>
            <div>
                <p>Area</p>
                <p>{area} km<sup>2</sup></p>
            </div>
            {!!borders.length && 
                <div>
                    <p>Borders</p>
                    <ul>{displayBorder()}</ul>
                </div>
            }
        </div>
    </div>
  )
}
