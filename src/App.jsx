  import { Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar.jsx";
  import HomePage from "./pages/HomePage.jsx";
  import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";
  import "./App.css";

  function App() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/:countryId"} element={<CountryDetailsPage />} />
        </Routes>
      </div>
    );
  }

  export default App;

// import { Routes, Route } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CountryDetailsPage from './pages/CountryDetailsPage';
// import Navbar from './components/Navbar';
// import './App.css';

// function App() {
//   const location = useLocation();

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container-fluid mt-4">
//         <div className="row">
//           {/* HomePage siempre visible en la parte izquierda */}
//           <div className={`col-md-4 ${location.pathname !== '/' ? 'd-none d-md-block' : ''}`}>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//             </Routes>
//           </div>
//           {/* CountryDetailsPage visible en la parte derecha cuando se navega a una página de detalles */}
//           {location.pathname !== '/' && (
//             <div className="col-md-8">
//               <Routes>
//                 <Route path="/:countryId" element={<CountryDetailsPage />} />
//               </Routes>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
