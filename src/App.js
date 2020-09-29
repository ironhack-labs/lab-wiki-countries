import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

import countries from './countries.json';
import './App.css';

class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount = () => {
    this.setState({ countries })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="row">
            <div className="col-4">
              <ul className="list-group mt-4 ml-5 text-left">
                <CountriesList data={ countries }/>
              </ul>
            </div>
            <div className="col-7">
              <Switch>
                <Route path="/country/:code" component={ CountryDetails }></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
