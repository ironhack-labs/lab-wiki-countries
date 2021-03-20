import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class CountriesList extends React.Component {
    render() {
      const countries = this.props.countries;
      return (

        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div className="list-group">
          {countries.map((country) => {
            return (
                <Link className="list-group-item list-group-item-action" to={`/CountryDetails/${country.cca3}`}>
                  <p>{country.flag}</p>
                  <p>{country.name.official}</p>
                </Link>
            );
          })}
          </div>
              </div>
      );
    }
  }
 
export default CountriesList;
