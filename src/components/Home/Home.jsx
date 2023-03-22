import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesList from '../CountriesList/CountriesList';
import CountryDetails from '../CountryDetails/CountryDetails';
import NavBar from '../NavBar/NavBar';

const Home = () => {

    
    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row'>
                     <CountriesList />
                    <Routes>
                        <Route path='/:countryId' element={<CountryDetails />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Home;