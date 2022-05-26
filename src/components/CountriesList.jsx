import React from 'react';
/* import countries from './../countries.json'; */
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';

function CountriesList(props) {
  const { countries } = props;

  return (
    <section className="countries-list">
      {/* <h1>Countries</h1> */}
      {countries.map((country) => {
        console.log(countries);
        return (
          <>
            <div className="each-country">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="country-flag"
              />
              <Link className="a-link" to={`/${country.alpha3Code}`}>
                <h4>{country.name.common}</h4>
              </Link>
              {/*          <aside>
              <CountryDetails />
            </aside> */}
            </div>
          </>
        );
      })}
    </section>
  );
}

export default CountriesList;
