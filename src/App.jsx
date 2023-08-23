import { Route, Routes, useParams } from 'react-router-dom'
import "./App.css";
import Navbar from './components/Navbar'
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path={`/:countryId`} element={<CountryDetailsPage />} />
      </Routes>



    </div>
  )
}

export default App;
