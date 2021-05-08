import { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {countries:null};
  }

  componentDidMount() {
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
