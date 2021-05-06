import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  const countriesList = props.countries.map((country) => {
    return (
      <Link
        className="list-group-item list-group-item-action"
        to={`/${country.cca3}`}
      >
        {country.name.common}
      </Link>
    );
  });

  return (
    <>
      {/* <!-- Countries List (Bootstrap column) --> */}
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {/* <a class="list-group-item list-group-item-action" href="/ABW">
            🇦🇼 Aruba
          </a> */}
          {countriesList}
        </div>
      </div>
    </>
  );
}
