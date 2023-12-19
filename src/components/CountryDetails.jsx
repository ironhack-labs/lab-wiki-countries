import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const CountryDetails = () => {
    // const { countries } = props;
    const { alpha3Code } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;
                const response = await axios.get(apiUrl);
                setCountryDetails(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCountryDetails();
    }, [alpha3Code]);

    if (!countryDetails) {
        return <p>Loading...</p>;
    }

    //const country = countries.find((country) => country.alpha3Code === alpha3Code);
    const { name, capital, area, borders } = countryDetails;

    return (
        <div className="col-7">
            <h1>{name.common}</h1>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {/* {
                                    countryDetails.borders.map((border) => {
                                        let borderCountry = countries.find((country) => country.alpha3Code === border);

                                        return (
                                            <li><Link to={"/" + border} > {borderCountry.name.common} </Link></li>
                                        );
                                    })
                                } */}
                                {borders.map((border) => (
                                    <li key={border}>
                                        <Link to={`/${border}`}>{border}</Link>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryDetails;
