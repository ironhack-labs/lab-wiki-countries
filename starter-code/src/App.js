import React, {Component} from 'react';
import './App.css';
import CountryList from './components/CountryList'
import countries from './countries.json'
import CountryDetail from './components/CountryDetail'
import Nav from './components/Nav'
class App extends Component{
  style= {
    'max-height': "90vh",
    'overflow': "scroll"
  }
  render(){
    return(
      <div className="App">
      <div>
        <nav>
          <div className="container-fluid">
            {/* Here goes nav component */}
            <Nav /> 
          </div>
        </nav>
        <div className="container">
          <div className="row">
          
          <div className="col-5 countries" style={this.style}>
             
              <CountryList countries={countries} />
            </div> 
            <div className="col-7">
              <h1>Detail component</h1>
              <CountryDetail countries={countries} />
            </div>   
        </div>
      </div>
    </div>
    </div>
    )
  }
}
  
 
export default App;