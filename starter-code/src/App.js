import React, {Component} from 'react';
import './App.css';
import CountryList from './components/CountryList'
import countries from './countries.json'

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
          <div className="container">
            {/* Here goes nav component */}
          </div>
        </nav>
        <div className="container">
          <div className="row">
          
          <div className="col-5 countries" style={this.style}>
             
              <CountryList countries={countries} />
            </div> 
            <div className="col-7">
              <h1>Detail component</h1>
            </div>   
        </div>
      </div>
    </div>
    </div>
    )
  }
}
  
 
export default App;