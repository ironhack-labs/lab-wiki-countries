import {Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryDetails(props){

    const {countryId} = useParams();
    console.log("countryId.....", countryId);
console.log("props.detail.......", props.detail);
    const result = props.detail.find(element =>
        element.alpha3Code === countryId
    );

console.log("result......",result);
    
    const [countryDetail, setCountryDetail] = useState({});
    setCountryDetail(result);
    

return (
<div className="col-7">
            <h1>{countryDetail.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{countryDetail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryDetail.area} km
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
    );
}
export default CountryDetails;