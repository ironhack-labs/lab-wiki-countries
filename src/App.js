import './App.css';
import {React, Component} from 'react';
import { Route, Switch } from 'react-router';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countries from './countries.json';

export default class App extends Component{
  state = {
    countriesList: [],
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.setState({ countriesList: countries })
    console.log('setSTate')
    
  };
 
  render(){
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="d-flex">
          <div className="col-6">
            <CountriesList countries={this.state.countriesList}/>
          </div>
          <Switch >
            <Route exact path="/:cca" render={(props) => <CountryDetails {...props} countries={this.state.countriesList}/>} />
          </Switch>
        </div>
      </div>
    </div>
  );
  }

}
