import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:country" element={<CountryDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
