import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
   <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/:countryId' element={<CountryDetails></CountryDetails>} />
      </Routes>

   </>
  );
}

export default App;


