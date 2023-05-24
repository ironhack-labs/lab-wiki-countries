import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryDetails({ countriesList }) {
    const [country, setCountry] = useState(null);
    const { alpha3Code } = useParams();

    useEffect(() => {
        const selectedCountry = countriesList.find((country) => {
            return country.alpha3Code === alpha3Code;
        });

        setCountry(selectedCountry);
    }, [alpha3Code]);

    function getCountryFromAlpha3Code(alpha3Code) {
        const country = countriesList.find((country) => {
            return country.alpha3Code === alpha3Code;
        });
        return country.name.common;
    }
    if (country) {
        return (
            <div className="col-7">
                <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag"
                />
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Capital:</strong></td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td><strong>Area:</strong></td>
                            <td>{country.area}</td>
                        </tr>
                        <tr>
                            <td><strong>Borders:</strong></td>
                            <td>
                                <ul>
                                    {country.borders.map((alpha3Code) => {
                                        return (
                                            <li>
                                                <Link to={`/${alpha3Code}`}>
                                                    {getCountryFromAlpha3Code(alpha3Code)}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CountryDetails;
