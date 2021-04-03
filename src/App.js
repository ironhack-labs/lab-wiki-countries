import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import countries from './countries.json';
import AppRouter from './Components/AppRouter';
import SyncLoader from 'react-spinners/SyncLoader';
import { Component } from 'react';

class App extends Component {
  state = {
    countries: [],
    loading: true
  }
  componentDidMount() {
    this.setState({ countries, loading: false })

  }

  render() {
    return (

      <div className="App">
        <Navbar />

        <div className="container">

          {
            this.state.loading ? (
              <div className="text-center">
                <SyncLoader color="blue" />
              </div>
            )
              :
              (
                <div className="row">
                  <CountriesList countries={this.state.countries} />
                  <AppRouter />
                </div>
              )
          }

        </div>
      </div>

    );
  }


}

export default App;
