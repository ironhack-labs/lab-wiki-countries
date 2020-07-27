import React from 'react'
import { Link } from 'react-router-dom'

const CountryBorders = props => {

    console.log(props)

    const listBorders = props.borders.map(border => {
        const dynamicBorders = props.countries.filter(filteringCountry => border.borders.indexOf(filteringCountry.alpha3Code) !== -1)
        return (
            <li key={border.name} style={{listStyle:"none",textAlign:"left",margin:"5px"}}>
                <img src={border.flag} alt="flag" style={{height:"15px",margin:"10px"}} />
                <Link to={{pathname: `/country/${border.alpha3Code}`, state: {country: border, borders: dynamicBorders, countries: props.countries} }} >{border.name}</Link>
            </li>
        )
    })

    return (
        <div>
            {listBorders}
        </div>
    )
}

export default CountryBorders
