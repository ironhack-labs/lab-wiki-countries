import { Link } from 'react-router-dom';

function CountriesList (props) {

    const linkStyle = {
        color: '#000',
        textDecoration: 'none',
        fontSize: '20px'
    }

    return (

        <div className='CountriesList'>
            <ul>
                {props.countries.map(country => (
                    <li><Link to={`/countryDetails/${country.alpha3Code}`} style={linkStyle}>{country.name.official}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default CountriesList;