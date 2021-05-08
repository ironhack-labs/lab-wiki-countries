import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';



class CountriesList extends React.Component {



  render() {
    return (

          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <ul>
            {this.props.countries.map((country, index) =>
              <li key={index}>
                <Link to={country.cca3}>{country.name.common}</Link>
              </li>)}
          </ul>
          </div>

    );
  }
}

export default CountriesList;