import React, { useState, useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import List from './List';
import DetailsCard from './DetailsCard';
import NavBar from './NavBar';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
        .then((response) => response.json())
        .then((data) => setCountries([...data]));
    }, []);

    return ( 
        <Fragment>
            <NavBar>
                <h1>WikiCountries</h1>
            </NavBar>
            <StyledMain>
                {countries && <List countries={countries} />}
            <Switch>
                {countries && <Route path='/country/:id' render={routeProps => <DetailsCard {...routeProps} countries={countries}/>}/>}
            </Switch>
            </StyledMain>
        </Fragment>
     );
}

const StyledMain = styled.main`
    display: flex;
    width: 100vw;
    justify-content: center;
`;
 
export default Home;