import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countries } = props;
  const { id } = useParams();
  const borders = countries.borders;

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id;
  });

  return (
    <section className="details-section">
      {foundCountry && (
        <>
          <div className="found-country-details">
            <img
              className="details-flag"
              src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
              alt="country-flag"
            />
            <h3>{foundCountry.name.common}</h3>
            <h5>
              <span className="font-color">Capital:</span>{' '}
              {foundCountry.capital}
            </h5>
            <h6>
              <span className="font-color">Area:</span> {foundCountry.area}
            </h6>
            {/*  <p>
              Borders:
              {borders.map((border) => {
                return (
                  <Link>
                    <h5>{border}</h5>
                  </Link>
                );
              })}
            </p> */}
            <Link className="a-link back-to-list-link" to="/">
              Back
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default CountryDetails;
