import React from 'react';
import countries from '/Users/andrekleine/Documents/ironhack/m2/w4/lab-wiki-countries/src/countries.json';

const CountryDetails = (props) => {
  console.log(props);

  const getCountry = id => {
    const theCountry = country => {
      return country.id === id;
    }
    return countries.find(theCountry)
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id);

  return (
    <div class="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className ="capital">Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{`${foundCountry.area} km`}              
              <sup>2</sup>
            </td>
          </tr>
          {/* <tr>
            <td>Borders</td>
            <td>
              <ul>
              {foundCountry.borders.map(country => {
                  return (
                    <li>
                  <Link to={`/${country.}`}/AND">Andorra</Link >
                </li>

                  );

              })}
                <li>
                  <Link to={`/{}`}/AND">Andorra</a>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
