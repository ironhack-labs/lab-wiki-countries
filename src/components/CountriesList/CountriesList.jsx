// import './CountriesList.css'
import { Link } from "react-router-dom";
// import { useState } from 'react';



const CountriesList = ({ countriesFromApi }) => {

    // const [countryList, setCountryList] = useState(country)

    return (


        countriesFromApi.map(country => {
            return (

                <div key={country.alpha3Code}>
                    <ul>
                        <li className='list'>
                            <Link to={`/${country.alpha3Code}`}>
                                {country.name.common}
                            </Link>
                        </li>
                    </ul>
                </div>
            )
        })
    )

}

export default CountriesList

