import React, { Component } from 'react'
import data from '../countries.json'
import Country from '../components/Country';
import CountryDetail from './CountryDetail'
import { Route } from 'react-router-dom';

class HomePage extends Component {

  state = {
    countries: data

  }

  render() {

    const {countries} = this.state;

    return (
      <div>
        <div className="row">
          <div className="list-group col-5 scroll">
            {countries.map((item) => {
              return <Country info={item} key={item.cca3} />
            })}
          </div>
          {/* <div className="col-7">Column 7/12</div> */}
          <Route path={'/:id'} component={CountryDetail} />
        </div>
      </div>
    )
  }
}

export default HomePage;
