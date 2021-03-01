import React from 'react';
import countries from '../countries.json';

class CountriesList extends React.Component {
  state = {
    allCountries: countries,
  };

  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {this.state.allCountries.map((eachCountry) => {
            return (
              <a className="list-group-item list-group-item-action" href="/ABW">
                {eachCountry.name.common}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
