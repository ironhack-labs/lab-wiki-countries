import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { countryId } = useParams();
  console.log("countryId.....", countryId)
  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log("response.......", response.data)
        setCountryDetail(response.data);
      })
      .catch((e) => {
        console.log('error getting country from API...', e);
      });
  }, [countryId]);

  const displayBorders = () => {
    if (countryDetail.borders.length > 0) {
      return (
        <ul>
          {countryDetail.borders.map((element, index) => {
            return (
              <li key={index}>
                <Link to={'/' + element}>{displaycoutryName(element)}</Link>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return;
    }
  };

  const displaycoutryName = (CountryCodeBorder) => {
    console.log("CountryCodeBorder.........", CountryCodeBorder)
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${CountryCodeBorder}`)
      .then((response) => {
        return response.data.name.official;
      })
      .catch((e) => {
        console.log('error getting country for borders from API...', e);
      });
  };

  const displayDetails = () => {
    console.log('countryDetail 2.......', countryDetail);
    return (
      <div className="col-7">
        <h1>{countryDetail.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
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
              <td>{displayBorders()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return <>{countryDetail ? displayDetails() : <p>loading....</p>}</>;
}
export default CountryDetails;
