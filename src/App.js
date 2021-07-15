import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Navbar/>
    <div id="body">
    
        <div style={{float: "left", height: '900px', overflow: 'scroll'}}>
          <CountryList />
        </div>
        <div className="country-detail" style={{float: "right", marginRight: '500px'}}>
          <Route path="/countries/:id" component={CountryDetails} />
        </div>
    </div>
    

    </>
  );
}



export default App;
