import countries from '../countries.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

const CountryDetails = () => {
    const [country, setCountry] = useState({});
    const { idCountry } = useParams();

    console.log(idCountry)

    useEffect(() => {
        const find = countries.find((country) => country.alpha3Code === idCountry);
        setCountry(find);
    }, [idCountry]);
    console.log(country);
    return <div className='col-7'
        key={idCountry}>{country ?
            <>
                <h1>{country?.name?.common}</h1><table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{country?.capital}</td>
                        </tr>
                        <tr>
                            <td style={{ width: '30%' }}>Area</td>
                            <td>{country?.area} km</td>
                        </tr>
                        <tr>
                            <td style={{ width: '30%' }}>Borders</td>
                            <td>
                                <ul>
                                    {
                                        country.borders?.map((border) => {
                                            return (
                                                <li key={border}>{border}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
            : null}
    </div>
};

export default CountryDetails;
