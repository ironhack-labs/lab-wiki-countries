import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";

function App() {
  return (
   <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>

   </>
  );
}

export default App;


