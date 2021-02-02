import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

export default function CountryDetails(props) {


    function getCountryDetails(cca3){
        return props.countries.find(el => {return el.cca3 === cca3})
    }

    const currentCountry = getCountryDetails(props.match.params.countryCode)
    const {capital, area, name, borders} = currentCountry

    let bordersList = ''
    if(borders.length>0 ){
        bordersList = borders.map(el =>{
            const matchingCountry = getCountryDetails(el)
            const {name, cca3} = matchingCountry
            return (
                <li key={cca3}>
                    <Link to={`/${el}`}>{name.common}</Link>
                </li>
            ) 
        })
    }else{
        bordersList = 'This Country has no Borders!'
    }


    return (
        <div className="col-7">
            <h1>{name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Captital</td>
                    <td>{capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                          {bordersList}
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
    )
}
