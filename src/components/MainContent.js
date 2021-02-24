import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

import countries from '../countries.json';

class MainContent extends Component {
  state = {
    countriesList: [],
  };

  componentDidMount() {
    this.setState({ countriesList: countries });
  }

  render() {
    return this.state.countriesList.length ? (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CountriesList countriesList={this.state.countriesList} />
          </div>
          <div className="col-6">
            <Route
              path="/:cca3"
              render={(props) => (
                <CountryDetails
                  countryCca3={props.match.params.cca3}
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
