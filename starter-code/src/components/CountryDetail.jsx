import React, { Component } from 'react';
import countries from '../countries.json';
import AllCountry from './AllCountry';
import TableCountry from './TableCountry';

class CountryDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { countries }
  }

  render() {
    const { params } = this.props.match;

    return (
      <div className="container">
        <div className="row">
          <div className="list-group col-sm">
            {this.state.countries.map((item) => <AllCountry image={item.flag} name={item.name.common} cca3={item.cca3}/>)}
          </div>
          <div className="col-sm">
            {this.state.countries.filter((item) => item.cca3 === params.id ).map((item) => <TableCountry name={item.name.common} capital={item.capital} area={item.area} borders={item.borders}/>)}
            
          </div>
          
        </div>
      </div>
    )
  }
}

export default CountryDetail;