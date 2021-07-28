import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ABW"
            >
              🇦🇼 Aruba
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/AFG"
            >
              🇦🇫 Afghanistan
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/AGO"
            >
              🇦🇴 Angola
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/AIA"
            >
              🇦🇮 Anguilla
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ALA"
            >
              🇦🇽 Åland Islands
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ALB"
            >
              🇦🇱 Albania
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/AND"
            >
              🇦🇩 Andorra
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ARE"
            >
              🇦🇪 United Arab Emirates
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ARG"
            >
              🇦🇷 Argentina
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ARM"
            >
              🇦🇲 Armenia
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ASM"
            >
              🇦🇸 American Samoa
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ATA"
            >
              🇦🇶 Antarctica
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/FLK"
            >
              🇫🇰 Falkland Islands
            </Link>
            <Link
              className="list-group-item list-group-item-action active"
              exact
              to="/FRA"
            >
              🇫🇷 France
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              exact
              to="/ZWE"
            >
              🇿🇼 Zimbabwe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
