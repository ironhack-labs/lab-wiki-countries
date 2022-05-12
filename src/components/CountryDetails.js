import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
    const {alpha3Code} = useParams();
    const countriesList = props.countriesList;

    // Had to make multiple states for nested objects inside the country object
    const [selectedCountry, setSelectedCountry] = useState({});
    const [countryNames, setCountryNames] = useState({});
    const [countryBorders, setCountryBorders] = useState([]);
    const [alpha2, setAlpha2] = useState("")

    //useEfffect gets from the api the selected country based on the alpha3Code passed from App.js
    useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(response => {
            console.log(response.data);

          setSelectedCountry(response.data);
          setCountryNames(response.data.name);
          setCountryBorders(response.data.borders);
          setAlpha2((response.data.alpha2Code).toLowerCase())
        })
        .catch(error => console.log("error getting the country details from API", error))
    }, [alpha3Code])

    // This finds the country name for each alpha code present in the border array.
    const findBorder = (countryCode) => {        
        const countryFound = countriesList.find(country => country.alpha3Code === countryCode);
        const countryName = countryFound.name.official;
        return countryName;
    }

    
    return(
    <div className='col-7'>
        <img className='col-7' src={`https://flagpedia.net/data/flags/w1160/${alpha2}.webp`} alt={countryNames.official}></img>
        <h1>{countryNames.official}</h1>
        <table className='table'>
            <thead>
            </thead>
            <tbody>
            <tr>
                <td>Capital</td>
                <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>{selectedCountry.area} km<sup>2</sup></td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                    <ul>
                        {countryBorders ? countryBorders.map(border => {
                            return(<li><Link to={`/countryDetails/${border}`}>{findBorder(border)}</Link></li>)
                        }) : <li>"This country has no borders with other countries."</li>}
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}

export default CountryDetails;