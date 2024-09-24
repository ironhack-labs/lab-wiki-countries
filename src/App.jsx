import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={':countryId'} element={<CountryDetails/>}/>

        <Route path={'*'} element={<NotFound/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
