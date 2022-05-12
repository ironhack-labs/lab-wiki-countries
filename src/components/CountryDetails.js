import { Route, Routes } from "react-router-dom";
import CountriesList from "./CountriesList";

function CountryDetails() {

    return(
        <Routes>
            <Route path="/:id" element={ <CountriesList id="" />} />
        </Routes>
    )
}


export default CountryDetails

