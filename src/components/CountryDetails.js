import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CountryDetails (){

     const { alpha3Code } = useParams();

     const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries/" + alpha3Code)
          .then( response => {
            setDetails(response.data);
          })
          .catch(error => console.log("error getting countries ", error));
      }, []);


      
      return (
    <div className="col-7">
          <h1>{details.name && details.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{details.capital && details.capital}</td> 
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {details.area && details.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href={details.alpha3Code}>{details.border && details.border }</a></li>
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