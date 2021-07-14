import countries from './countries.json'
import { Card } from 'react-bootstrap'
import CountryDetails from './CountryDetails'
import { NavLink } from 'react-router-dom'


const CountriesList = () => {

    return (
        countries.map((country, index) => {
            const route = "/country/" + country.cca3
            return <NavLink key={index} to={route} {...country}>{country.name.official} <br /></NavLink>
        }

        )
    )


}

export default CountriesList

