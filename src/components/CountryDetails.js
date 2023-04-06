import {Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryDetails(props){
  const {countryId} = useParams();
  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    const result = props.detail.find(element =>
      element.alpha3Code === countryId
    );
    setCountryDetail(result);
  }, [countryId, props.detail]);

  if (!countryDetail) {
    return <div>Loading...</div>;
  }

console.log(countryDetail.borders)

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
                 {countryDetail.borders.map((border) =>{
                  return <li><Link to={'/' + border}>{border}</Link></li>
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