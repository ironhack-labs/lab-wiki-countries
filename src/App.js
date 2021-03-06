import Navbar from './components/navbar/Navbar';
import CountriesList from './components/counties-list/CountriesList';
import { Route } from 'react-router-dom';
import CountriesDetails from './components/countries-details/CountriesDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Route exact path="/:country" component={CountriesDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
