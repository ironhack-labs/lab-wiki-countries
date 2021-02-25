import React from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        {this.props.countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link
                className="list-group-item list-group-item-action"
                to={{
                  pathname: `/countries/${country.alpha3Code}`,
                  state: { country },
                }}
              >
                <img width="200px" src={country.flag} alt="flag" />
                <h3>{country.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
