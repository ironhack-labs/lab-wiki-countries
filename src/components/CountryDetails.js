import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

function CountryDetails(props) {

    const countryId = useParams()
    const[countryDetails, setCountryDetails] = useState({})
    
    const countryUrl = "https://ih-countries-api.herokuapp.com/countries"
 
    console.log(countryDetails);
    console.log(countryId);

    useEffect(() =>{
        axios.get(`${countryUrl}/${countryId}`)
        .then(response => {
            setCountryDetails(response) 
            console.log(response.data);
        })
        .catch( e => console.log(e))

    })

    


    return(
        <div className="col-7">
        <h1>{props.countryDetails.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: 30 + "%" }}>Capital :</td>
              <td>{props.name}</td>
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
      </div>

    )
}
export default CountryDetails;
