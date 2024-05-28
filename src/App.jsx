import "./App.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar  from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [countries, setCountries] = useState(null);
  useEffect(()=>{
    const getCountries = async() =>{
      try {
        const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
        setCountries(response.data);
        console.log("ACA ESTA EL RESPONSE ->", response.data);
      }
       catch (error) {
        console.log(error.message);
      }
    }
    getCountries();
  },[])


  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage countries={countries} />} />
        <Route
          path={"/countries/:countryId"}
          element={<CountryDetailsPage />}
        />
      </Routes>
    </div>
  );
}


export default App;


// const [posts, setPosts] = useState(null);
//   async function getPosts() {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       setPosts(response.data);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }