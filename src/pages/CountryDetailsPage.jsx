import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
    const {countryId} = useParams()
    const[country, setCountry] = useState()
    const[borderingCountries, setBorderingCountires] = useState([])

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                setCountry(response.data);
                console.log(response.data);
                if (response.data.borders) {
                    const borders = response.data.borders;
                    const borderRequests = borders.map(border => 
                        axios.get(`https://ih-countries-api.herokuapp.com/countries/${border}`)
                    );
                    Promise.all(borderRequests)
                        .then(responses => {
                            setBorderingCountires(responses.map(res => res.data));
                        })
                        .catch(error => {
                            console.error('Error fetching bordering countries:', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error fetching country details:', error);
            });
    }, [countryId]);


    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h2>Country Details</h2>
        <h3>{country.name.common}</h3>
        <h3>{country.capital}</h3>
        <h3>{country.area} km</h3>
        <ul><span>borders:</span>{borderingCountries.map((borderingCountry) => (
            <li key={borderingCountry.alpha3Code}>
            <Link to={`/${borderingCountry.alpha3Code}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${borderingCountry.alpha2Code.toLowerCase()}.png`}
                 style={{ width: '36px', marginRight: '10px' }}
            />
            {borderingCountry.alpha2Code}
            </Link> 
          </li>
        ))}</ul>
        </div>
    )
}

export default CountryDetails;
