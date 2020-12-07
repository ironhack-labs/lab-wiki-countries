import React from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              {this.props.listOfCountries.map((country) => {
                return (
                  <Link to={`/${country.name.common}`} key={country.cca3}>
                    {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
