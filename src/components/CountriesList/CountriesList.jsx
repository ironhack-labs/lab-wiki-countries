import './CountriesList.css'
import countriesData from '../../countries.json'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const CountriesList = ({ Countries }) => {


    const [countryApi, setCountryApi] = useState([])

    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(data => { setCountryApi(data) })
    }, [])


    return (
        <div className='CountriesList container '>
            <h2>Countries List</h2>
            <div className="row">
                <ul className='col-md-6 list-group'>
                    {countryApi.map(({ name, alpha2Code, alpha3Code }, i) => {
                        return < li key={i} > <Link to={`/${alpha3Code}`} className='list-group-item'>{`${alpha2Code} ${name.common}`}</Link> </li>
                    })}
                </ul>
            </div>

        </div >
    )
}

export default CountriesList

