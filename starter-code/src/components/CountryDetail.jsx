import React, { Component } from 'react';
import countries from '../countries.json';
import AllCountry from './AllCountry';

class CountryDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { countries }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="list-group col-sm">
            {this.state.countries.map((item) => <AllCountry image={item.flag} name={item.name.common} cca3={item.cca3}/>)}
          </div>
          <div className="col-sm">
            tabela
          </div>
          
        </div>
      </div>
    )
  }
}

export default CountryDetail;