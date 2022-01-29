import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = (props) => {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      const data = await response.json();
      console.log(data);
      await setCountry(data);
    };
    fetchFunc();
  }, [id]);
  //   const countryIdx = props.countries.findIndex(
  //     (country) => country.alpha3Code === id
  //   );
  //   const country = props.countries[countryIdx];
  console.log(country);
  const borders = country.borders
    ? country.borders.map((border) => (
        <li key={border}>
          <Link to={border}>
            {
              props.countries.find((country) => country.alpha3Code === border)
                .name.common
            }
          </Link>
        </li>
      ))
    : undefined;

  return (
    <div className="col-7">
      <h1>{country?.name?.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country?.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country?.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
