import React from 'react';
import Navbar from './components/navbar/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Countries from './countries.json';
import { Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
super(props);
this.state = {
  countries: [],
};
  }

  componentDidMount() {
    this.setState({
      countries: Countries,
    });
  }
  getCountryByCca3(cca3) {
    return Countries.find((country) => {
      return country.cca3 === cca3;
    });
  }

  render() {
    return (
      <div className="main-div">
        <Navbar />

        <div className="row">
          <div className="col-5">
            <CountriesList countries={this.state.countries} />
          </div>

          <div className="col-7">
            <Switch>
              <Route
                path="/:cca3"
                children={<CountryDetails getCountry={this.getCountryByCca3} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
