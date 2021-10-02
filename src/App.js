import './App.css';
import { CountriesList } from './components/CountriesList';
import { BrowserRouter } from 'react-router-dom';
import countriesJSON from './countries.json';

function App() {
  const countries = [...countriesJSON];

  return (
    <div class="container">
      <div class="row">
        <BrowserRouter>
          <CountriesList countries={countries} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
