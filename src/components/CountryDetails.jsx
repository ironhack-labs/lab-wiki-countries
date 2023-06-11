import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
    const { countries } = props;
    const { id } = useParams();
    const country = countries.find((country) => country.alpha3Code === id);
    const countryBorders = country.borders.map((border) => {
        const borderCountry = countries.find((country) => country.alpha3Code === border);
        return (
            <li key={borderCountry.alpha3Code}>
                <Link to={`/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</Link>
            </li>
        );
    });
    
    return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/normal/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} style={{ width: '18rem' }} />
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                <sup>2</sup>
                        </td>
                    </tr>
                    {countryBorders.length > 0 && (
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>{countryBorders}</ul>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;