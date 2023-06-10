import { Container } from '@mui/material';
import CountriesList from '../components/CountriesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
const API_URL = 'https://ih-countries-api.herokuapp.com/countries';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      setCountries(res.data);
    };
    getData();
  }, []);
  return (
    <Container>
      <CountriesList countries={countries}/>
    </Container>
  );
};

export default HomePage;
