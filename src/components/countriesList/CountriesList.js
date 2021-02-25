import './CountriesList.css'

import { NavLink } from 'react-router-dom'

const CountriesList = ({countries}) => {

    return (
        
        
        <ul>
        {countries.map((elm, idx) => {
            return (
                <li>
                    <NavLink to={`/${elm.cca2}`} key={idx}>{elm.name.common}</NavLink>
                </li>
            )
        })}
        </ul>
    )
}

export default CountriesList