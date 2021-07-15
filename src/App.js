
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div class="col-md-4">
            <CountriesList />
          </div>

          <div class="col-md-8 rightSide">
            <Route path="/:id" component={CountryDetails} />
          </div>

        </div>
      </div>
    </div>




  );
}

export default App;
