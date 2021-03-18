import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <div class="container">
        <div class="row">
          <CountriesList/>
          <Route exact path='/countries/:cca3' component={CountryDetails}/>

          </div>
      </div>


    </div>
  );
}

export default App;
