import "./App.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import {DataWrapper} from "./context/Data.context"



function App() {
  return (
    <div className="App">
      <DataWrapper>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:countryId" element={<CountryDetailsPage/>}/>
  </Routes>
  </DataWrapper>
    </div>
  );
}

export default App;
