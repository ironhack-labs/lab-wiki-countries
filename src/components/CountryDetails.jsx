import React from 'react';
import { useParams } from 'react-router-dom';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const CountryDetails = ({countries}) => {
  console.log(countries)
  const { alpha3Code } = useParams();
  console.log('ALPHA3CODE', alpha3Code)
  const country = countries.find((country) => country.alpha3Code === alpha3Code);
  console.log('COUNTRY', country)

  return (

    <>
      {country ?
      
      <Card sx={{ minWidth: 275 }}>

        <CardContent>
      <img src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
      <Typography variant="h2" >{country.name.common} </Typography>
      <Typography variant="p"> <b>Capital</b>: {country.capital} </Typography>
      <Typography variant="p"> <b>Area</b>: {country.area} km2 </Typography>
      <ul>Borders: 
        {country.borders.map(border => 
        <li key={border}> <Link to={`/${country.alpha3Code}`}>{border}</Link> </li>)}
      </ul>

        </CardContent>

      </Card>
      :
      <div>
        <h1>Country not found</h1>
      </div>
      }
    </>

  );
};

export default CountryDetails;
