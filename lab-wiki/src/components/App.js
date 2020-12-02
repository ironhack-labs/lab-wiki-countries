import './App.css';
import NavBar from './navbar/NavBar'
import {React, Component} from 'react'
import CountriesList from './countrieslist/CountriesList'
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './contrydetails/CountryDetails'
import 'bootstrap/dist/css/bootstrap.css';

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
      
        <main>
        <div>
        <NavBar />
          <div className="container">
            <div className="row">          
                <CountriesList countries={countries}/>
         
            <Switch>
                <Route path="/:country" render={CountryDetails} />
              </Switch>   
              </div>       
          </div>
          </div>
        </main>
      </>
    );
  }


}

export default App;