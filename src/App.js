import React, {Component} from 'react';
import './App.css';
import CountriesList from './Components/CountriesList';
import Navbar from './Components/Navbar';
import Routes from './Routes';
import DataCountries from './countries.json'

class App extends Component{
  state = {
    listC: DataCountries
  }

  render() {
    const {listC} = this.state;
    console.log("Que es LISTC",listC);
    return (
    <div className="App">
      <Navbar/>
      <div className="row-app">
        <CountriesList
          countries={listC}
        />
        <Routes/>
      </div>
    </div>
    )
  }
}

export default App;
