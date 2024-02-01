import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:alpha3code" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
