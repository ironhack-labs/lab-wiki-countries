import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map((elm, i) => {
            return (
              <Link key={i}
                className="list-group-item list-group-item-action"
                to={`/${elm.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                  alt="img"
                  style={{ height: '30px', width: '50px' }}
                />
                 {`   ${elm.name.common}`}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
