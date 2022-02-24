import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function CountryDetails () {
    const { countryCode } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ country, setCountry ] = useState({});
    
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
        .then(response => {
            setCountry(response.data);
            setLoading(false);
        }).catch(err => console.log(err));
    }, [countryCode]);

if (loading) {
    return <h1>Loading ...</h1>
}
return (
    <div class="col-7">
        <h1>{country.name.common}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map(borderCountry => {
                                return <li key={borderCountry}>{borderCountry ? borderCountry : "No bordering countries"}</li>
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default CountryDetails;