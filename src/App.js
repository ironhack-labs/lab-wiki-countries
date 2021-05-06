import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
import countries_data from './countries.json';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      countries: countries_data,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList countries={this.state.countries} />
            </div>
            <div className="col-7">
              <Route
                exact
                path="/countries/:id"
                render={(props) => (
                  <CountryDetails {...props} countries={this.state.countries} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col-5">
//             <CountriesList />
//           </div>
//           <div className="col-7">
//             <Route exact path="/countries/:id" component={CountryDetails} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
