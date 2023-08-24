import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function CountryDetails(props) {
    const {alpha3Code} = useParams();
    const [getCountryDetails, setGetCountryDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState(true);

    useEffect(() => {
        console.log(alpha3Code);
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(response => {
            setGetCountryDetails(response.data);
            setErrorMessage(false);
        });        
    }, []);

     return(
        <div class="container">
            {setErrorMessage && <p>Loading</p>}
            <h1></h1>
             <p>Country Details</p>
             {getCountryDetails.name.common}
             <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td >Capital</td>
              <td>{getCountryDetails.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {getCountryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {getCountryDetails.borders.map((b) =>{
                    return(
                        <li><a href={`/countrydetails/${b}`}>b</a></li>
                    )
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
