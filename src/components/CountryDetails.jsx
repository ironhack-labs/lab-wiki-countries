import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import countriesData from '../countries.json';


const CountryDetails = () => {
    const [country, setCountry] = useState({})
    const { idCountry } = useParams()

    // console.log(idCountry)

    useEffect(() => {
        const find = countriesData.find((country) => country.alpha3Code === idCountry);
        setCountry(find);
    }, [idCountry]);

    return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country?.alpha2Code.toLowerCase()}.png`} />
            <p>Country: {country?.name.common}</p>
            <p>Capital: {country?.capital}</p>
            <p>Area: {country?.area}</p>
        </div>
    )
}

export default CountryDetails;


{/* <div class="col-7">
    <h1>France</h1>
    <table class="table">
        <thead></thead>
        <tbody>
            <tr>
                <td style="width: 30%">Capital</td>
                <td>Paris</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>
                    551695 km
                    <sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                    <ul>
                        <li><a href="/AND">Andorra</a></li>
                        <li><a href="/BEL">Belgium</a></li>
                        <li><a href="/DEU">Germany</a></li>
                        <li><a href="/ITA">Italy</a></li>
                        <li><a href="/LUX">Luxembourg</a></li>
                        <li><a href="/MCO">Monaco</a></li>
                        <li><a href="/ESP">Spain</a></li>
                        <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div> */}
