import * as React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from "react";
const API_URL = "https://ih-countries-api.herokuapp.com/countries";


const CountriesList = () => {

const [countries, setCountries] = useState([]);

useEffect(() => {
  const getData = async () => {
    const res = await axios.get(API_URL);
    setCountries(res.data);
  }
  getData();
}, [])


  return (
    <div>
      {countries.map((country) => {
        const twoLowercode = country['alpha2Code'].toLowerCase();
        const threeLowercode = country['alpha3Code'].toLowerCase();
        return (
          <div key={country['alpha3Code']}>
            <Link to={`/country/${threeLowercode}`}>
              <Card style={{ maxWidth: 345, marginTop: '24px' }}>
                <Stack alignItems="center" justifyContent="center">
                  <CardMedia
                    sx={{ height: 50, width: 70 }}
                    image={`https://flagpedia.net/data/flags/icon/72x54/${twoLowercode}.png`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {country.name.common}
                    </Typography>
                  </CardContent>
                </Stack>
                <CardActions></CardActions>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
