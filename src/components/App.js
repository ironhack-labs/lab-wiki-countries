import logo from '../logo.svg';
import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import countries from '../countries.json'
import { Component } from 'react'
import { Switch } from 'react-router';
//import CountryDetails from './CountryDetails'


class App extends Component () {

  constructor (){
        super()
        this.state = {
            countries: []
        }
    }

    // componentDiMount(){
    //   this.setState({})
    // }

  render() {

    return (
    <div>
        <Navbar />

        <div className ="container">
          <div className ="row">
            <CountriesList countries = {countries}/>

            <Countrydetails />

            <Switch>
                <Route path ="/" render={props => <CountryDetails {...props} />}/>
            </Switch>
          </div>
        </div>
    </div>

    
    );
  }

}

export default App;

