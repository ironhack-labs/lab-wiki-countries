import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
    
    <div>
        <CountryList />
    </div>
    <div>
        <Route path="/countries/:id" component={CountryDetails} />
    </div>  

    </>
  );
}



export default App;
