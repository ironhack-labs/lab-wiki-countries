import logo from './logo.svg';
import './App.css';

import React from "react";
// import Navbar from "./components/CountriesList";
import Navbar from "./NavBar";

import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: [],
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            {/* <CountryList />
            <Route exact path="/:id" component={CountryDetail} /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

  // componentDidMount() {
  //   // we make a get request to the server
  //   axios
  //     .get('/api/countries')
  //     .then((response) => {
  //       // console.log(response);
  //       this.setState({
  //         countries: response.data,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }