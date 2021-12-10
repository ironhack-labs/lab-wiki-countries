import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Countries from './pages/Countries';

import data from './countries.json';
import CountryDetails from './pages/CountryDetails';

const Router = () => {
  const Pokemons = () => <h1>Pokemons</h1>;
  const Home = () => <h1>Home</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="*" element={<h1>404</h1>}></Route>
            <Route path="pokemons" element={<Pokemons />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="countries" element={<Countries allCountries={data} />}>
              <Route path=":id" element={<CountryDetails allCountries={data} />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;