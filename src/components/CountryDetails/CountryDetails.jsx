import { useParams, Link } from 'react-router-dom'
import './CountryDetails.css'

function CountryDetails({ countries }){
    const { countryAlpha3Code } = useParams()
    const foundCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === countryAlpha3Code;
      });

    return (
        <div>
            {!foundCountry && <h3>Country not found!</h3>}
 
            {foundCountry && (
            <>
                <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
                alt={`${foundCountry.name.common} Flag`}
                />
                <h1>{foundCountry.name.common}</h1>
                <div className='text'>
                    <p>Capital</p>
                    {foundCountry.capital}
                </div>
                <hr />
                <div className='text'>
                    <p>Area</p>
                    {foundCountry.area}
                </div>
                <hr />
                <ul className="borders">
                    <span className="borders-title">Borders</span>
                    <div className="border-list">
                        {foundCountry.borders && foundCountry.borders.length > 0 ? (
                            foundCountry.borders.map((border, index) => (
                            <li key={index}>
                                <Link to={`/${border}`}>
                                {border}
                                </Link>
                            </li>
                            ))
                        ) : (
                            <li>No borders</li>
                        )}
                        </div>

                </ul>



            </>
            )}
        </div>
    )
}

export default CountryDetails