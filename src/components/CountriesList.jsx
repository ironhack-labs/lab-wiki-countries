import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function CountriesList({countries}) {

    return (
        <div >
            <h2>Countries</h2>
            {countries.map((country, i) => {
                return (

                    <div key={i} className="list-group">
                        <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country-flag" />
                            <p>{country.name.official}</p>
                        </Link>
                    </div>

                )
            })}
        </div>
    )
}

export default CountriesList