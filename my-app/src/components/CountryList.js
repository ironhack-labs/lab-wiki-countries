import React, { Component } from "react";
import {Link} from "react-router-dom";
import CountryDetail from "./CountryDetail";
import {Switch, Route} from 'react-router-dom';
class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const countries = this.props.countries;
    // console.log(countries);
    return (
      <div>
        <div class="list-group col-4 border">
        { countries.map((e, i) => {
          return (
            <Link to={`/country/${e.cca3}`}> {e.name.common}</Link>
          )
        })}
        </div>
        <Switch>
          <Route path='/country/:id' render={(props) =>
            <CountryDetail country={countries.find(e => props.match.params.id === e.cca3)} />
          } />
        </Switch>
      </div>
    );
  }
}

export default CountryList;
