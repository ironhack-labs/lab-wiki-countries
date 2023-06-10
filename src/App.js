import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from  "./components/Navbar.jsx"
import Main from "./pages/main.jsx"
import Details from "./pages/details.jsx"



import { Route, Routes } from "react-router-dom";
function App() {


  return <div className="App">
    <Navbar/>
    
    <Routes>
      <Route path="/"  element={<Main/>} />
      <Route path="/:alpha3Code"  element={<Details/>} />
    </Routes>
  </div>;

}
export default App;