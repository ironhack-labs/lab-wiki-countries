import { Route, Switch } from "react-router-dom";
import {Component} from 'react'
import Loader from "react-loader-spinner";

//data
import dataCountries from './countries.json'

//components
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'

//style
import './App.css';

class App extends Component {
  state = {
    data: null,
    loading: true
  }

  componentDidMount() {  
    console.log('DOM renderizado')
    
    this.setState({
      data: dataCountries,
      loading: false
    })

  }

  componentWillUnmount() {  

  }

  render(){
    return (
      <div className="App">
        <header>
          <Navbar/> 
        </header>
        
        {this.state.loading ? 
          (<Loader type="TailSpin" color="#00BFFF" height={80} width={50} /> )
          :
          (<main>
            <div className="container">
              <div className="row">
                <div className="col-4" style={{maxHeight: 700, overflow: "scroll"}}>
                  <CountriesList data={this.state.data}/>
                </div>
                <div className="col-8" >
                  <Switch>
                    <Route 
                      path="/:cca3" 
                      render={ props =>  <CountryDetails props={props} data={this.state.data}/> } /> 
                  </Switch>
                </div>
              </div>
            </div>
          </main>)
        }
      </div>
    )
  }
}

export default App;
