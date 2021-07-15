import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <NavBar />
      <div style={{display: 'flex'}}> 
        <CountriesList />
        <Route path={'/country/:cca3'} component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
