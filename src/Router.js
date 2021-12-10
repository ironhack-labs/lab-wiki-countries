import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import CountriesList from "./Components/CountriesList"
import CountryDetails from "./Components/CountryDetails"
import data from './countries.json'


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route path='/countries' element={<CountriesList allCountries={data} />}>
                            <Route path=':cca3' element={<CountryDetails allCountries={data}/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Router