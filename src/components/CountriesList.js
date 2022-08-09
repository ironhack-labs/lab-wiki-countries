import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'

function CountriesList (props) {

    const [countriesState, setCountriesState] = useState([]);

    useEffect ( () => {
        setCountriesState(props.countries)
    }, [props.countries])

    return (
        <div>
            <h3>Countries</h3>
            {countriesState.map((country)=>{
                return(
                    <div key={country.alpha3Code}>
                        <h5>
                            <Link to={`/${country.alpha3Code}`}>
                                {country.name.common}
                            </Link>
                        </h5>
                    </div>
                )
            })}

        </div>
    )
}
export default CountriesList