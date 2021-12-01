import './App.css';
import NavBar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from 'react-router-dom'
import React, { Component } from "react";
import countries from './countries.json'

class App extends Component {

  constructor(){
    super()
      this.state = {
        countries: countries
    }
  }

  // componentDidMount = () => {
  //   this.setState({ countries: countries })
  // }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <CountriesList countries={this.state.countries} />} />
          <Route path="/country/:id" render={(props) => <CountryDetails {...props} />} />
        </Switch>
      </div>
    )
  }
}
export default App;


// <Switch>
//         <Route path="/" exact render={() => <Home />} />
//         <Route path="/experience" render={() => <Experience />} />
//         <Route path="/education" render={() => <Education />} />
//         {/* Route Params & Query Strings */}
//         {/* 3. Instrucciones: Si la ruta tiene params o query pasamos las props */}
//         <Route path="/detalles/:id" render={(props) => <RouteParams {...props} />} />
//         <Route path="/resultados-busqueda" render={(props) => <QueryStrings {...props} />} />
//         {/* Ruta protegida */}
//         <Route path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
//       </Switch>