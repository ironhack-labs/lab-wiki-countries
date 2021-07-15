
import './App.css';
import { Switch, Route } from "react-router-dom"; 
import Navbar from './components/Navbar'; //Importing <nav> component from react-router-dom lib., it's usually outside <Switch>
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList'; 

//NB: We have <Switch> to enable to routes to be side-by-side (there are use-cases) and 'exact' is needed for the first "/" page..
//..and 'exact' on the /projects/:id route because we have another route that is just /projects

function App() {
  return (
    <div className="Container">
      <Navbar />
      <div className="Country-list">
      <CountriesList />
      </div>
      <Switch>
        <div className="Country-detail">
        <Route path="/country/:id" component={CountryDetails} />
        </div>
      </Switch>
    </div>
  );
}

export default App;

//NOTE FOR LABS on THRURSDAY 15th of JULY
//We are going to have 1 country list,  1 component and 1 route (we do not need a .json file in VS code, all data is from API)
//On the CountryList we make the axios to all the countries, and set the staet as countries: result.data (same as we've done)
//On country list iterate via .map
//For each country that we list we create a NavLink that should clikn to another route, think the path and /:
//For the API we need to pass the countryId with the ULR to the API and ${countryId}, we also need async here and 