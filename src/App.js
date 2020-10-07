import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount = () => {
    fetch(`https://countries.tech-savvy.tech/countries`)
    .then(response => response.json())
    .then(async data => {
      // console.log(data);
      await this.setState(() => ({ countries: data }));
    });    
  }

  render() {
    return (
      <div className="App">  
          <Navbar/>  
          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} />  
              <Switch>
                {/* <Route 
                  exact path="/:cca3" 
                  component={CountryDetails}/> */}
                <Route 
                  exact 
                  path="/:cca3" 
                  render={(props) => <CountryDetails countryCode={props.match.params.cca3} countries={this.state.countries}/>}/>
              </Switch>              
            </div>
          </div>
      </div>
    );
  }
}

export default App;
