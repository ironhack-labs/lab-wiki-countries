import { Link } from 'react-router-dom'
import countries from '../../countries.json'


const CountriesList = () => {
    return(
        <>
            <div>
                {countries.map((country) => 
                    <Link to={`/countrylist/${country.cca3}`}>{country.name.official}</Link>
                )}
            </div>
        </>
    )
}


export default CountriesList