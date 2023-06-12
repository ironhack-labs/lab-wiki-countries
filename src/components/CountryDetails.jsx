import React from 'react';
import { useParams } from 'react-router-dom';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const CountryDetails = ({countries}) => {
  console.log(countries)
  const { alpha3Code } = useParams();
  console.log('ALPHA3CODE', alpha3Code)
  const country = countries.find((country) => country.alpha3Code === alpha3Code);
  console.log('COUNTRY', country)

  return (

    <div>
      {country ?
      <>
      <img src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png
            `}
            alt="Flag" />
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <ul>Borders: 
        {country.borders.map(border => 
        <li key={border}> <Link to={`/${country.alpha3Code}`}>{border}</Link> </li>)}
      </ul>
      </>:
      <div>
        <h1>Country not found</h1>
      </div>

      }
    </div>

    // <Grid container spacing={3}>
    //   <Grid item xs={12}>
    //     <Typography variant="h4">{country.name}</Typography>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Typography variant="h6">Capital: {country.capital}</Typography>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Typography variant="h6">Area: {country.area} km²</Typography>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Typography variant="h6">Borders:</Typography>
    //     <ul>
    //       {country.borders.map((border) => (
    //         <li key={border}>
    //           <Link to={`/${border}`}>
    //             {
    //               countries.find((country) => country.alpha3Code === border)
    //                 .name
    //             }
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </Grid>
    //   <Grid item xs={12}>
    //     {/* <img className={classes.img} src={country.flag} alt={country.name} /> */}
    //     <img src={country.flag} alt={country.name} />
    //   </Grid>
    // </Grid>
  );
};

export default CountryDetails;
