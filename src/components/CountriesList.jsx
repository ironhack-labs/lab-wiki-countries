import React from 'react';

import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  return (
    <>
      {countries.map((country) => {
        return (
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt=""
                  />
                  {country.name.official}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountriesList;