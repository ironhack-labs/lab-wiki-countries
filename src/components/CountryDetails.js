import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
    const params = useParams();
    const country = getCountryByAlpha3Code(params.alpha3Code);

    const linkStyle = {
        color: '#000',
        textDecoration: 'none',
        fontSize: '20px'
    }
    
    function getCountryByAlpha3Code(alpha3Code) {
        return props.countries.find(country => country.alpha3Code === alpha3Code);
    };

    return (
        <div className='CountryDetails'>
            <h1>{country.name.official}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km²</p>
            <div className='bordersList'>
                {country.borders.length !== 0 &&
                <div>
                    <p>Borders:</p>
                    <ul>
                    {country.borders.map(borderCountryAlpha3Code => 
                    (
                        <li><Link to={`/countryDetails/${borderCountryAlpha3Code}`} style={linkStyle}>{getCountryByAlpha3Code(borderCountryAlpha3Code).name.official}</Link></li>
                    ))}
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}

export default CountryDetails;