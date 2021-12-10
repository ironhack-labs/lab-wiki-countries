import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Countries from "./components/Countries"
import CountryDetails from "./components/CountryDetails"
//getting data from json
import data from './countries.json'

const Router = () => {
    return (
        <>
        <BrowserRouter>
           <Routes>
               <Route path='/' element={<Navbar/>}>
                   <Route path='/countries' element={<Countries allCountries={data}/>}>
                       <Route path=':cca3' element={<CountryDetails allCountries={data}/>}/>
                   </Route>
               </Route>
           </Routes>
        </BrowserRouter>
            
        </>
    )
}

export default Router
