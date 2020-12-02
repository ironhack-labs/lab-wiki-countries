import './App.css';
import { React, Component } from 'react'
import countries from './countries.json'

import CountryDetails from './countrydetails/CountryDetails'
import CountriesList from './countrieslist/CountriesList';
import Navbar from './navbar/Navbar';

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }

  componentDidMount = () => {
    this.setState({ countries: countries })
  }

  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <section className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route path='/:country' render={props => <CountryDetails {...props} />} />
            </Switch>
          </section>
        </main>
      </>
    )
  }
}

export default App;


// function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="container">
//         <section className="row">
//           <CountriesList />
//           <Switch>
//             <Route path='/:country' render={props => <CountryDetails {...props} />} />
//           </Switch>
//         </section>
//       </main>
//     </>
//   );
// }