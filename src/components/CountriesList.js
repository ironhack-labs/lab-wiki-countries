import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  console.log('COUNTRIES: ', props.countries);
  const countryList = props.countries.map((c, key) => {
    return (
      <div className="list-group" key={key} style={{ textAlign: 'left' }}>
        <Link className="list-group-item list-group-item-action" to={c.cca3}>
          {c.name.official}
        </Link>
      </div>
    );
  });

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countryList}
    </div>
  );
}

export default CountriesList;
