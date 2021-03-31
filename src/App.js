import React, {Component} from 'react'
import './App.css';

import data from '../src/data/countries.json'

//components
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'

class App extends Component {

  state ={
    countries: [...data]
}


  render(){
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>

        <main className="container">
          <div className="row justify-content-between">
            <div className="col">
              <CountriesList data={this.state.countries}/>  
            </div>
            <div className="col">

            </div>

          </div>
        </main>
        
        <footer>
        </footer>
      </div>
    )
  }
}

export default App;
