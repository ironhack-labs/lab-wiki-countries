import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: `90vh`, overflow: `scroll` }}>
      <div className="list-group">
        {props.countriesJson.map((element) => {
          const { official } = element.name;
          const { alpha3Code, alpha2Code } = element;
          return (
            <Link
              key={official}
              className="list-group-item list-group-item-action"
              to={`/${alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
              />
              <p>{official}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
