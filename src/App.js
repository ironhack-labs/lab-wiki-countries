import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <CountriesList />
            <Route exact path="/:id" component={CountryDetails} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
