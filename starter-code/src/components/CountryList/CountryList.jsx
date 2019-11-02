import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component {

  state = {
    countries: []
  }

  componentDidMount() {
    let { countries } = this.props; 
    this.setState({ countries }); 
  }

  listCountries = () => {
    return this.state.countries.map((country, idx) => {
      return (
        <Link 
          to={`/${country.cca3}`} 
          key={`${idx} ${country.name.common}`} 
          className="list-group-item list-group-item-action">
          <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="" style={{width: '25px'}}/>
          {` ${country.name.common}`}
          {/* {`${country.flag} ${country.name.common}`} */}
          </Link>
      );
    });
  }

  render() {
    return(
      <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
          {this.listCountries()}
        </div>
      </div>
    )
  }

}

export default CountryList; 