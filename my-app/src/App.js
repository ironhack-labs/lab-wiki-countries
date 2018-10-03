import React, { Component } from 'react';
import Country from './components/Country.js'


class App extends Component {
    render() {
      return (
        <div>
        <div style={{backgroundColor:"#4095ec", color:"white"}}>
            <h1 style={{marginLeft: "20px"}}>Wiki Countries</h1>
        </div >
        <div style={{marginLeft: "35px", marginTop: "25px"}}>
            <Country />
        </div>
        </div>
      );
    }
  }
  
  export default App;