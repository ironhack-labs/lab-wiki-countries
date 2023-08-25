import "./App.css";

 import HomePage from "./pages/HomePage";
 import Navbar from "./components/Navbar";
 import CountryDetails from "./pages/CountryDetailsPage";
 import {Routes, Route} from 'react-router-dom'

 function App() {
   return (
     <div className="App">

       <Navbar/>
       <Routes>
       <Route path = '/' element={<HomePage/>} />
       <Route path = '/:countryId' element={<CountryDetails/>}/>
       </Routes>
     </div>
   );
 }

 export default App;


 
//  //Old

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import CountryDetailsPage from './pages/CountryDetailsPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Route path="/" exact component={HomePage} />
//         <Route path="/:countryId" component={CountryDetailsPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;
