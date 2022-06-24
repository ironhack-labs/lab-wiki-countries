import React from 'react';
import countries from '../countries.json';

function CountryListItem(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="{props.countries.alpha3Code}"
              >
                {props.country.alpha3Code}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryListItem;
