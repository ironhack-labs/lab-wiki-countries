import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
// import countries from './countries.json';

import axios from 'axios';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    // we make a get request to the server
    axios
      .get('/api/countries')
      .then((response) => {
        // console.log(response);
        this.setState({
          countries: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountryList countries={this.state.countries} />
            <Route exact path="/:id" component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
