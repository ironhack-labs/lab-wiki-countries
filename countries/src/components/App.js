import './App.css';
import NavBar from './NavBar/Navbar'
import {React, Component} from 'react'
import CountriesList from './CountriesList/CountriesList'
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './CountryDetails/CountryDetails'
import countries from './../countries.json'


class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: []

    }
  }

  componentDidMount = () => {
    this.setState({countries: countries})
  }
  
  render() {
    return (
      <>
        <NavBar />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-5" >
                <CountriesList countries={this.state.countries}/>
              </div>
              <Switch>
                <Route path="/:country" render={CountryDetails} />
              </Switch>
            </div>
          </div>
        </main>
      </>
    );
  }
  
  
}

export default App;
