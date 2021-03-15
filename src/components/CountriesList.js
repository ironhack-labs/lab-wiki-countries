import React from 'react';
import { Link } from 'react-router-dom'

class CountriesList extends React.Component {
  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
        {this.props.listOfCountries.map(eachCountry=> {
            return (
          <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}>
            {eachCountry.flag} {eachCountry.name.common} 
          </Link>

            )

        })}
        </div>
      </div>
    );
  }
}

export default CountriesList;