import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails({data}) {

    const [displayCountry, setDisplayCountry] = useState(null)
    const [borderCountries, setBorderCountries] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        fetch("https://ih-countries-api.herokuapp.com/countries/" + id)
        .then(response => response.json())
        .then(data => setDisplayCountry(data))
        .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        if(displayCountry) {
            const countries = displayCountry.borders.map(borderCode => {
                const borderCountry = data.find(country => country.alpha3Code === borderCode)
                return borderCountry
            })
            setBorderCountries(countries)
        }
    }, [displayCountry, data])

    return (
        <div className="col-7">
            {displayCountry && (
                <>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${displayCountry.alpha2Code.toLowerCase()}.png`} alt="" />
                    <h1>{displayCountry.name.common}</h1>
                    <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{displayCountry.capital}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            {displayCountry.area} km
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                            <td>
                                {borderCountries.length > 0 ?
                                    <ul>
                                        {borderCountries.map((country) => {
                                            return (
                                                <li key={country._id}>
                                                    <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                     : <p>No bordering countries found.</p>}
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default CountryDetails;