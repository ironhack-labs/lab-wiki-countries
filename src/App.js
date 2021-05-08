import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { BrowserRouter as Router} from 'react-router-dom';
// import CountryDetails from './components/CountryDetails/CountryDetails';


class App extends React.Component {

  state = {

  }

  // componentDidMount();

  render() {
    return (

        <Router>
          <Navbar />
          <CountriesList />
          {/*<CountryDetails />*/}
        </Router>
    );
  }
}

export default App;
