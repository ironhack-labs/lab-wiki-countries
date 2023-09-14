import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:alpha3CodeId" element={<CountryDetailsPage />} />
                <Route
                    path="*"
                    element={<p>There is no page under this Route</p>}
                />
            </Routes>
        </div>
    );
}

export default App;
