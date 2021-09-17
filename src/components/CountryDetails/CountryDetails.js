import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const retrieveCountry = (countries, CCA3) => {
  return countries ? countries.find((country) => country.cca3 === CCA3) : [];
};

const retrieveBorders = (countries, currentCountry) => {
  if (!countries || !currentCountry) {
    return '';
  }
  return currentCountry.borders.map((borderCountryCCA3, index) => {
    const country = retrieveCountry(countries, borderCountryCCA3);
    return (
      <li key={index}>
        <Link to={'/' + country.cca3}>{country.name.common}</Link>
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

const CountryDetails = ({ countries, CCA3 }) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    setCurrentCountry(retrieveCountry(countries, CCA3));
  }, [CCA3]);

  return !currentCountry ? (
    pageNotFound()
  ) : (
    <div className="col-7">
      <h1>{currentCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              {currentCountry.capital[0] || 'This country don`t have a capital'}
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
