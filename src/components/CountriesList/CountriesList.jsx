// hay que guardar las listas en el estado

// import { useState } from "react";
import './CountriesList.css'
import { Link } from "react-router-dom"

const CountriesList = ({ countriesData }) => {

    // const [countriesValue, setCountriesValue] = useState();

    return (

        <div className='countriesList'>
            <ul>

                {countriesData.map(elm => {

                    return (

                        <li key={elm.alpha3Code}>
                            <Link to={elm.alpha3Code}>{elm.name.common}</Link>
                        </li>

                    )

                })}
            </ul>
        </div>
    )



}

export default CountriesList