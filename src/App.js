import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Countries from './Components/CountriesList'
import CountriesDetails from './Components/CountryDetails'
import CountriesList from './countries.json'


import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      countries: CountriesList
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row justify-content-around">
            <Countries />
            <Switch>
              <Route path="/country-details/:cca3" render={(props) => <CountriesDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container">
//         <div className="row justify-content-around">
//           <Countries />
//           <Switch>
//             <Route path="/country-details/:cca3" render={(props) => <CountriesDetails {...props} />} />
//           </Switch>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;