import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import './App.css'


export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         countries: []
//     }
// }

//   componentDidMount() {
//       axios.get("https://restcountries.eu/rest/v2/all")
//           .then(({data}) => this.setState({countries: data}))
//           .catch(err => console.error("An error has occurred when obtaining the list of countries", err))
//   }


  render() {
    return (
      <div>
        <NavBar />
        <main className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" render={(props) => <CountryDetails  {...props}/>} />
          </Switch>
        </main>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="">
//       <NavBar />
//       <main className="row">
//         <CountriesList />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/:id" render={(props) => <CountryDetails />} />
//         </Switch>
//       </main>
//     </div>
//   );
// }

// export default App;
