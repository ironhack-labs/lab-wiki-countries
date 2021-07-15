import './App.css';
import {Switch, Route} from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  
  
  
  return (
    <>
      <Navbar />
      <div style={{float: "left", height: "900px", overflow:"scroll", marginTop:"50px"}}>
        <CountriesList/>
      </div>
      <div style={{float:'right', marginRight:"500px", marginTop:"50px"}}>
        <Route path="/countryDetails/:id" component={CountryDetails}/>
      </div>
      
    
      
    </>
  );
}

export default App;
