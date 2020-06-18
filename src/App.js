import React from 'react';
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Nav from './components/Nav'
import Country from './components/Country'
import countries from './countries.json'

class App extends React.Component {
  state = {
      countries,
      active: ''
  }
  changeActive = (cca3) =>{
    console.log(cca3)
    this.setState({
      active: cca3
    })
  }
  render(){
    return (
      <div className="two-columns">
      <Nav active={this.state.active} countries={this.state.countries}/>
      <Switch>
        <Route exact path="/country/:cca3" render={
          ({match: {params: {cca3}}}) => {
          return <Country cca3={cca3}/>
          }
        }></Route>
      </Switch>
      </div>
    )
  }
}

export default App;
