import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function CountryDetails(props) {
 const [countryDetails, setCountryDetails] = useState([]);
 const id = useParams
 const baseUrl = 'https://ih-countries-api.herokuapp.com/countries'
  
useEffect(()=> {
  axios
  .get(`${baseUrl}/countries/${id}`)
  .then((response) => {
    setCountryDetails(response.data)
  })
  .catch((e) => console.log(e))
}, [])

console.log(props)
    return (
        <div className="col-7">
        <h1>{props.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{props.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
               {props.area}
                <sup></sup>
              </td>
            </tr>
            {/* <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {countryDetail.borders.map}
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
            </tr> */}
          </tbody>
        </table>
      </div>

    )
}

export default CountryDetails
