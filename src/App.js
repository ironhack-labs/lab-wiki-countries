
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'
import NotFound from './components/NotFound'
import { Route, Switch } from "react-router-dom";
import {Component} from 'react'
import CountriesData from  './countries.json'
import axios from 'axios'

class App extends Component {

  state = {
    data: null,
    loading: true
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => {
      const gottenData = res.data
      this.setState({
        data: gottenData,
        loading: false
      } 
      )
    })
    
  }

  componentWillUnmount() {
  }

  render(){
  return (
    <div className="App">
      <Navbar/>
      {this.state.loading ? (
      <div className='Container text-center'> <div className='row'><h1>Loading</h1> </div></div>
      ): (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: 700, overflow: "scroll"}}>
            <CountriesList data={this.state.data}/>
          </div>
          <div className="col-7" >
            {<Switch>
              <Route exact path="/:cca3" render={(props) => (
              <CountryDetails props={props} data={this.state.data} />
                )} />
            </Switch>}
          </div>
        </div>
      </div> 
      )}
      
    </div>
  )
  }
}

export default App;
