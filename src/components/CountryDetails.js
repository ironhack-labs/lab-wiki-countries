import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function CountryDetails() {
  const { alpha3Code } = useParams();
 const [details, setDetails] = useState(null);
 const baseUrl = 'https://ih-countries-api.herokuapp.com/countries'
  
useEffect(()=> {
  axios
  .get(`${baseUrl}/${alpha3Code}`)
  .then((response) => {
    setDetails(response.data)
    console.log(response.data)
  })
  .catch((e) => console.log(e))
}, [alpha3Code])

if(details){
    return (
        <div key={alpha3Code} className="col-7">
        <h1>{details.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{details.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
               {details.area}
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
}

export default CountryDetails
