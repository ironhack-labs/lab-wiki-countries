//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import CountryList from './components/CountryList';
import countries from './countries.json';
import { Route } from 'react-router-dom';
import CountryDetails from "./components/CountryDetails";

/* function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
} */

class App extends React.Component{

    state = {
      countries:[],
    }

  render(){

    return(

      <div className="App">
                    <NavBar/>
        <div className="div-bar">
          <div className="container">
              <div className="row">
                  <CountryList />
                  <Route exact path="/:id" component={CountryDetails} />
              </div>
          </div>
        </div>
    </div>
    
    );
  }
}

export default App;
