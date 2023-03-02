import './CountriesList.css'
import { Link } from 'react-router-dom'
import countries from './../../countries.json'


function CountriesList() {

    console.log(countries)

    return (
        <>
            {countries.map((country) => (

                <div className='CountriesList' key={country.alpha3Code} >
                    <p><Link to={country.alpha3Code}>{country.alpha3Code}</Link></p>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`} alt="" />
                </div>

            ))}
        </>
    )
}


export default CountriesList
