import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import Navbar from './components/Navbar';

function Router(){
    return(
    <Routes>
        <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries}/>}
            />
        <Route
            path="/" element={<Navbar/>}/>
    </Routes>
    );
}

export default Router;