import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar.js'; 
import ContriesList from './components/countrieslist.js'; 
import CountryDetails from './components/countrydetails.js'

function App() {
  return (
    <div className="App">
        <Navbar/> 
    <div style={{display:'flex'}} >    
        <ContriesList/>
        <Switch> 
            <Route 
              path ="/countries/:id" 
              render={(props) => {  return <CountryDetails {...props} /> 
              }} /> 

        </Switch>
      </div> 

    </div>
  );
}

export default App;
