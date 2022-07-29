import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams();

  const [details, setDetails] = useState(null);

  //Option 2: send request to the API

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASEAPI + '/' + countryId)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [countryId]);

  if (details === null) {
    return <>loading...</>;
  }

  //Option 1: we receive all countries from props + find the details of the country we use:

  // useEffect(() => {
  //   const details = props.countries.find(
  //     (country) => country.alpha3Code === countryId
  //   );
  //   setDetails(details);
  // }, [countryId, props.countries]);

  return (
    <div className="col-7">
      <h1>
        <img
          className="big-image"
          src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />
        {details.name.common}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{details.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.translations.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
