import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {

    return (
        <div className='CountriesList'>

            <ul>
                {countries.map((country) =>
                    <Link to={`/country/${country.alpha3Code}`} key={country._id}>
                        <p> {country.alpha3Code} </p>
                        <p>flag={country.alpha2Code}</p>
                    </Link>
                )}
            </ul>
        </div>
    )
}