import React from 'react'; 
import { useParams, Link } from 'react-router-dom';


const CountryDetails = ({countries}) => {

    const { countryCode } = useParams();
    
    const country = countries.find(country => country.alpha3Code === countryCode) || {}

    return(
        <>
        <div className='col-6' style={{float: 'right', marginTop: '-380px'}}>
            <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt='flag' 
                style={{width: '100px'}}/>
            <h1>{country.name.common}</h1>
            <table>
                <thead/>
                <tbody style={{width: "300px", textAlign: 'left', padding: '10px', fontSize: '18px' }}>
                    <tr>
                        <td style={{fontWeight: '600'}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: '600'}}>Area</td>
                        <td>{country.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                    <td style={{fontWeight: '600'}}>Borders</td>
                    <td>
                            <ul>{country.borders.map(alpha3 => {
                            return (
                                <li key={alpha3}>
                                    <Link 
                                        to={`/${alpha3}`}
                                    > 
                                    {countries.find(country => country.alpha3Code === alpha3).name.common}
                                    </Link>
                                </li>
                            )
                        })} </ul>
                        </td>
                    </tr>
                </tbody>
            </table>           
        </div>
        </>
    )
}

export default CountryDetails;