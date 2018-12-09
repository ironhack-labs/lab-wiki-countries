import React, { Component } from 'react';
import './App.css';
import './countries.css';
import Countries from './countries'
import 'bootstrap/dist/css/bootstrap.css';;

class App extends Component {
  state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedCountry: {
        country: "No country selected",
        capital: "No country selected",
        area: "No country selected",
        borders: ["No country selected"]
      }
    };
    
  componentDidMount() {
    fetch("http://206.189.7.127/countries/")
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addObject = (newCountry) =>{
    this.setState({selectedCountry: newCountry})
  }

  render() {
     var country = this.state.selectedCountry
    return (
      <div className="App">
        <Countries country={country} countries={this.state.items} addObject={this.addObject}/> 
      </div>
    );
  }
}

export default App;
