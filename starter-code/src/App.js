import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail';
import Container from './components/Container';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';


class App extends Component {
  constructor(){
    super()

    this.state={
      countriesData: [...countries]
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="container">
         <div className="row">

            <Switch>
              <Route exact path="/:cca3" render={(props) => <CountryDetail {...props} countriesData = {this.state.countriesData}/>}/>
            </Switch>

            <div className="container">
                <div className="col-5" style={{height:"90vh", overflow: "scroll"}}>
                  <div className="list-group">
                    {
                      countries.map((country, index) => {
                        return <Container key={index} countryInfo={country}> </Container>
                      })
                    }
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      

    );
  }
}

export default App;
