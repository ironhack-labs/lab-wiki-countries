import { Route, Switch } from "react-router-dom";
import {Component} from 'react'

//data
import dataCountry from './countries.json'

//components
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'

//style
import './App.css';

class App extends Component {
  state = {
    data: dataCountry
  }

  render(){
    return (
      <div className="App">
        <header>
          <Navbar/> 
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-4" style={{maxHeight: 700, overflow: "scroll"}}>
                <CountriesList data={this.state.data}/>
              </div>
              <div className="col-8" >
                <Switch>
                  <Route 
                    path="/:cca3" 
                    render={ props =>  <CountryDetails props={props} data={this.state.data}/> } /> 
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
