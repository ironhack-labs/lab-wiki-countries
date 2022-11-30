import { useEffect, useState } from 'react';
import AxiosCountryAPI from '../../services/country.services';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
    const { idCountry } = useParams();

    const [country, setCountry] = useState(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        AxiosCountryAPI
            .getCountry(idCountry)
            .then((country) => {
                setCountry(country);
            })
            .catch((err) => {
                console.error(err);
                setError('Error');
            });
    }, [idCountry]);

    return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country?.alpha2Code.toLowerCase()}.png`} alt={country?.alpha2Code} />
            <h1>{country?.name.common}
            </h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country?.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            <span>{country?.area} km</span>
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    country?.borders.map((border) => {
                                        const borderCountry = countries.find(country => country.alpha3Code === border);
                                        return (
                                            <li key={borderCountry?.alpha3Code}><Link to={`/${border}`}>{borderCountry?.name.common}</Link></li>
                                        )
                                    })

                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            {error && <p>{error}</p>}
        </div>
    );
}

export default CountryDetails;