import { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
// import axios from 'axios';
import countries from './countries'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {countries:null};
  }

  componentDidMount() {
    // axios({
    //   method: 'get',
    //   url: 'https://restcountries.eu/rest/v2/all',
    // })
    // .then(
    //   (response) => {
    //     this.setState({countries: response.data})
    //     console.log(response.data)
    //   }
    // );
    this.setState({countries})
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div class="row">
            <div
              class="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <CountriesList countries = {this.state.countries}/>
            </div>
            <div class="col-7">
              <Route path="/:cca3" render={(props) => (
                <CountryDetails {...props} countries = {this.state.countries}/>
              )}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
