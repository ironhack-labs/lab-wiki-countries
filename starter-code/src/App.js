import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    countries: []
  }
  componentDidMount(){
  axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  .then(response => { 
    let countries = response.data
    this.setState({
      countries
    })
  })
  .catch(e=>console.log(e))

  }

  render() {
    const {countries} = this.state
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
