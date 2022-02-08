import {Routes, Route } from "react-router-dom"
import { Navbar, CountryDetails, CountryList } from "./components";
import data from './countries.json'

function Router(){
    return (
        <Routes>
            <Route path="/:id" 
            element={ <CountryDetails/>} />


            {/* 404  v6 */}
            <Route path="*" element={<h1>No existe la Pagina</h1>}/>
        </Routes>
    )
};

export default Router;