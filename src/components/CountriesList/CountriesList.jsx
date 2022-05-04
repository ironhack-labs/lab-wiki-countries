import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function CountriesList({ countriesData }) {
    // const [countries, setCountries] = useState([]);

    // useEffect(() => {
    //     setCountries(countriesData);
    // }, []);

    return (
        <div>
            {countriesData.map((country) => {

                return (

                    <div key={country.alpha3Code} className="country">
                        <Link to={`/country/detail/${country.alpha3Code}`}>
                            <h3>{country.name.common}</h3></Link>
                        <hr />
                    </div>

                );
            })}

        </div>
    );
}

export default CountriesList


