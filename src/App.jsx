import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
  
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/:countryId' element={<CountryDetailsPage></CountryDetailsPage>}/>
      </Routes>
  


  );
}

export default App;
