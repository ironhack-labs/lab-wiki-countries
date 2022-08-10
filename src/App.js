import './App.css';

import { Navbar, CountriesList } from './components';

import RootRoutes from './RootRoutes';
import countriesJSON from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries = {countriesJSON}/>
            {/* React-Router Route rendering the CountryDetails should go here */}
            <RootRoutes />
          </div>
        </div>
      
    </div>
  );
}

export default App;

/* countries={countries} */
