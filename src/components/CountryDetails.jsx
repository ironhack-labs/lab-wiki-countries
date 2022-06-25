// import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

// https://ih-countries-api.herokuapp.com/countries

const CountryDetails = ({ countries, imgUrl }) => {
  const { alpha3Code } = useParams();

  //BONUS - ITERATION 4

  // const [country, setCountry] = useState({});

  // useEffect(() => {
  //   const getCountryDetails = async () => {
  //     const { data } = await axios(
  //       `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
  //     );

  //     setCountry(data);
  //   };

  //   getCountryDetails();
  // }, [alpha3Code]);

  // console.log(country);
  //

  console.log(countries);

  const foundCountry = countries.find(
    (country) => country.alpha3Code === alpha3Code
  );

  const {
    name: { official },
    alpha2Code,
    capital,
    area,
    borders,
  } = foundCountry;

  const listBorders = borders.map((border) => (
    <li>
      <Link to={`/${border}`} key={alpha3Code}>
        {countries.find((country) => country.alpha3Code === border).name.common}
      </Link>
    </li>
  ));

  return (
    <div className="col-7">
      <img src={`${imgUrl}${alpha2Code.toLowerCase()}.png`} alt="flag" />
      <h1>{official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{listBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
