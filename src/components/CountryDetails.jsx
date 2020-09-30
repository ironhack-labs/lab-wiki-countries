import React from 'react'
import {NavLink} from 'react-router-dom'

const CountryDetails = (props) => {
    const getCountry = props.countries.filter(country => country.cca3 === props.country)

    const getValues = (obj) => {
        return Object.values(obj).map(val => 
            <p>{val}</p>
        )
    }

    const getBorders = (arr) => {
        const bordersArr = []
        arr.forEach(el => {
            bordersArr.push(props.countries.filter(country => country.cca3 === el))
        })

        if (!bordersArr.length) {
            return (<p>No Borders</p>)
        } else {
            return bordersArr.map(el => 
               <NavLink className="country-link" to={`/${el[0].cca3}`}>{el[0].name.common}<svg viewBox="0 0 448 512"><path fill="currentColor" d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></NavLink>
            )
        }

    }

    return (
        <>
            
            <h1><figure>{getCountry[0].flag}</figure>{getCountry[0].name.common}</h1>
            <div className="row">
                <div className="col-6"><strong>Official name</strong></div>
                <div className="col-6">{getCountry[0].name.official}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Capital</strong></div>
                <div className="col-6">{getCountry[0].capital}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Region</strong></div>
                <div className="col-6">{getCountry[0].region} / {getCountry[0].subregion}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Area</strong></div>
                <div className="col-6">{getCountry[0].area} km<sup>2</sup></div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Languages</strong></div>
                <div className="col-6">
                    {getValues(getCountry[0].languages)}
                </div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Borders</strong></div>
                <div className="col-6">
                    {getBorders(getCountry[0].borders)}
                </div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Calling code</strong></div>
                <div className="col-6">+{getCountry[0].callingCode}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Independent</strong></div>
                <div className="col-6">{getCountry[0].independent ? 'Yes' : 'No'}</div>
            </div>
        </>
    )
}

export default CountryDetails