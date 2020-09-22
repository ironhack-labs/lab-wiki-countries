import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div class="list-group">
        <Link to="/ABW" className="ist-group-item list-group-item-action">
          <span role="img" aria-label="Aruba">
            🇦🇼{' '}
          </span>
          Aruba
        </Link>
        <Link to="/AFG" className="ist-group-item list-group-item-action">
          🇦🇫 Afghanistan
        </Link>
        <Link to="/AGO" className="ist-group-item list-group-item-action">
          🇦🇴 Angola
        </Link>
        <Link to="/AIA" className="ist-group-item list-group-item-action">
          🇦🇮 Anguilla
        </Link>
        <Link to="/ALA" className="ist-group-item list-group-item-action">
          🇦🇽 Åland
        </Link>
        <Link to="/ALB" className="ist-group-item list-group-item-action">
          🇦🇱 Albania
        </Link>
        <Link to="/AND" className="ist-group-item list-group-item-action">
          🇦🇩 Andorra
        </Link>
        <Link to="/ARE" className="ist-group-item list-group-item-action">
          🇦🇪 United
        </Link>
        <Link to="/ARG" className="ist-group-item list-group-item-action">
          🇦🇷 Argentina
        </Link>
        <Link to="/ARM" className="ist-group-item list-group-item-action">
          🇦🇲 Armenia
        </Link>
        <Link to="/ASM" className="ist-group-item list-group-item-action">
          🇦🇸 American
        </Link>
        <Link to="/ATA" className="ist-group-item list-group-item-action">
          🇦🇶 Antarctica
        </Link>
        <Link to="/FLK" className="ist-group-item list-group-item-action">
          🇫🇰 Falkland
        </Link>
        <Link to="/FRA" className="ist-group-item list-group-item-action">
          🇫🇷 France
        </Link>
        <Link to="/ZWE" className="ist-group-item list-group-item-action">
          🇿🇼 Zimbabwe
        </Link>
      </div>
    </div>
  );
}

export default CountriesList;
