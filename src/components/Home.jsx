import React from 'react';
import CountriesList from './CountriesList';

const Home = ({ countries }) => {

    return(
        <div>
            <CountriesList countries={countries}/>
        </div>
    );
}

export default Home;
