import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const retrieveCountry = (countries, alpha3Code) => {
  return countries
    ? countries.find((country) => country.alpha3Code === alpha3Code)
    : [];
};

const retrieveBorders = (countries, currentCountry) => {
  if (!countries || !currentCountry) {
    return '';
  }
  return currentCountry.borders.map((borderCountryAlpha3Code, index) => {
    const country = retrieveCountry(countries, borderCountryAlpha3Code);
    return (
      <li key={index}>
        <Link to={'/' + country.alpha3Code}>{country.name}</Link>
      </li>
    );
  });
};

const pageNotFound = () => {
  return (
    <div className="col-7">
      <h1>Page Not Found! ='(</h1>
    </div>
  );
};

const CountryDetails = ({ countries, alpha3Code }) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    setCurrentCountry(retrieveCountry(countries, alpha3Code));
  }, [alpha3Code]);

  return !currentCountry ? (
    pageNotFound()
  ) : (
    <div className="col-7">
      <h1>{currentCountry.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              {currentCountry.capital || 'This country don`t have a capital'}
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{retrieveBorders(countries, currentCountry)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
