import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './NavBar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import CountryDetail from './CountryDetail'
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  state = { }

  componentDidMount(){ //window.onload happens once when the components first mounts 
    console.log(this)  //Get your data from an API or where you'll get data from your server DB. 
  }

  render() {
    return (
      <div>
        <h1>Welcome to Routing</h1>
        <Navbar /> {/*  This will always show because it not in the switch statement  */}
        <Switch>
          <Route exact path='/' component={(props) =>   <Home {...props} /> }></Route>
          <Route exact path='/about' component={(props) =>    <About {...props} /> }></Route>
          <Route exact path='/contact' component={(props) =>  <Contact {...props} /> }></Route>
          <Route path='/country/:id' component={(props) => <CountryDetail {...props} />}></Route>
          
        </Switch>
      </div>
    );
  }
}

export default App;

