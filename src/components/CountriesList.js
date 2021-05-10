import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  console.log('CountriesList');
  //if (true) return <h3>testing CountriesList</h3>;

  return (
    <div className="panel panel-primary" id="result_panel">
      <div className="panel-heading">
        <h3 className="panel-title">Countries List</h3>
      </div>
      <div className="panel-body">
        <ul className="list-group">
          {props.countries.map((country) => (
            <li className="list-group-item" key={country.numericCode}>
              <Link
                className="text-decoration-none text-dark"
                to={`/countries/${country.alpha3Code}`}
              >
                {country.name}
                <span className="badge badge-primary badge-pill">
                  <img src={country.flag} alt={country.name} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
