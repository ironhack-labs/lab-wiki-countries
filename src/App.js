import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div class="container">
          <div class="row">
            <CountriesList />
            <Route exact path='/countries/:id' component={CountryDetails}/>
          </div>          
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
