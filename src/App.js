import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Component } from 'react';
import CountriesList from "./components/CountriesList/CountriesList.jsx"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="container">
          <div className="row">
            <div className="col-5 countriesColu">
              <CountriesList />
            </div>
            <div className="col-7 infoCountry"></div>
          </div>
        </div>
      </div>
    );
  }
}
