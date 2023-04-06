import {Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountryDetails(props){
  const {countryId} = useParams();
  const [countryDetail, setCountryDetail] = useState(null);


  useEffect(() => {

    //Main iteration 
    // const result = props.detail.find(element =>
    //   element.alpha3Code === countryId
    // );


    //Bonus Iteration 5
    axios.get("https://ih-countries-api.herokuapp.com/countries/" + countryId )
    .then(responseForCountry =>{
      setCountryDetail(responseForCountry.data);
    })
    
  }, [countryId, props.detail]);

  if (!countryDetail) {
    return <div>Loading...</div>;
  }

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
                 {countryDetail.borders.map((border, index) =>{
                  return <li><Link key={index} to={'/' + border}>{border}</Link></li>
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