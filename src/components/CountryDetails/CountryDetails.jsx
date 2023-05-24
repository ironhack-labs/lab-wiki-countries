import { Link, useParams } from 'react-router-dom';

function CountriesDetails({countries}) {

    const { id } = useParams()

    const selectedCountry = countries.find(country => country.alpha3Code === id)
    
    return (

        <div className="details">

            <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />

            <h1>{selectedCountry.name.official}</h1>

            <hr />

            <h3>Capital: {selectedCountry.capital}</h3>

            <hr />

            <h3>Area: {selectedCountry.area} km<sup>2</sup></h3>

            <hr />

            <h3>Borders:</h3>

            <ul>
                {
                    selectedCountry.borders.map((country, i) => {
                        return (
                        
                        <div key={i}>
                            <Link to={`/${country}`}>
                                <p>{country}</p>
                            </Link>
                        </div>
                        )
                    })
                }
            </ul>

            <hr />

        </div>

    )
}

export default CountriesDetails;