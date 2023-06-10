import React from 'react';
import { useParams } from 'react-router-dom';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  img: {
    width: '100%',
    height: 'auto',
  },
});

const CountryDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">{country.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Capital: {country.capital}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Area: {country.area} km²</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Borders:</Typography>
        <ul>
          {country.borders.map((border) => (
            <li key={border}>
              <Link to={`/${border}`}>
                {
                  countries.find((country) => country.alpha3Code === border)
                    .name
                }
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12}>
        <img className={classes.img} src={country.flag} alt={country.name} />
      </Grid>
    </Grid>
  );
};

export default CountryDetails;
