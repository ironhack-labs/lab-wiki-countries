import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<h4> Select a country for more details</h4>} />
            <Route path="/:id" element={<CountryDetails />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    );
}

export default Router;