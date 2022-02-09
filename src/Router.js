import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

import Navbar from './components/Navbar';

function Router(props){

    return(

    <Routes>
        <Route
            
            path="/:alpha3Code"
            element= {<CountryDetails/>}
            />
        <Route
            path="/" element={<Navbar/>}/>
    </Routes>
    );
}

export default Router;