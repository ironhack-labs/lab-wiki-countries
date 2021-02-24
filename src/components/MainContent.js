import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

import axios from 'axios';

class MainContent extends Component {
  state = {
    countriesList: [],
  };

  async componentDidMount() {
    const apiResponseCountries = await axios.get(
      'https://restcountries.eu/rest/v2/all'
    );
    this.setState({ countriesList: apiResponseCountries.data });
  }

  render() {
    return this.state.countriesList.length ? (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <CountriesList countriesList={this.state.countriesList} />
          </div>
          <div className="col-6">
            <Route
              path="/:alpha3Code"
              render={(props) => (
                <CountryDetails
                  alpha3Code={props.match.params.alpha3Code}
                  countriesList={this.state.countriesList}
                />
              )}
            ></Route>
          </div>
        </div>
      </div>
    ) : null;
  }
}
export default MainContent;
