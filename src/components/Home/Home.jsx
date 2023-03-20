import React from 'react';
import CountriesList from '../CountriesList/CountriesList';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    
                     <CountriesList />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;