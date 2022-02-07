import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Countries from './pages/Countries';
import data from './countries.json';
import Country from './pages/CountryDetails';

const Router = () => {
  const Home = () => <h1>Home</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/countries"
              element={<Countries allCountries={data} />}
            >
              <Route
                path=":id"
                element={<Country allCountries={data} />}
              ></Route>
            </Route>
            <Route path="*" element={<h1>Error 404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
