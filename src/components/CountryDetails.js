import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function CountryDetails() {
const {countryId} =useParams();
const [details, setDetails] = useState({})

useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries" + countryId)
    .then(response => {
        setDetails(response.data)
    })
    .catch(e => console.log("error error error",e))
}, [])

    return(
        <div class="col-7">
            <h1>{details.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{details.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {details.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                     <Link to ={"/${details.capital}"}> {details.name.common} </Link>
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}
export default CountryDetails;