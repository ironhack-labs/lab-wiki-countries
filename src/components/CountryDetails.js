import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {    
    const [country, setCountry] = useState({
        name: '',
        capital: '',
        area: '',
        borders: [],
    });

    useEffect(() => {
        const found = props.countries.find(
        (country) => country.alpha3Code === props.match.params.alpha3Code
        );

        if (found) {
        const { name, capital, area, borders } = found;
            setCountry({
                name: name,
                capital: capital,
                area: area,
                borders: [...borders],
            });
        }
    }, 
    [props]);

    function getName(alpha3Code) {
        const found = props.countries.find((country) => country.alpha3Code === alpha3Code);
        return found ? (found.name) : '';
    }

    return (        
        <div className="col-6 country-name">
            <h1>{country.name}</h1>
            <table className="table">
                <thead />
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>
                            {country.capital}
                        </td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km²                
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => {
                                return (
                                    <li key={border}>
                                        <Link to={'/' + border}>
                                            {getName(border)}
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

export default CountryDetails;