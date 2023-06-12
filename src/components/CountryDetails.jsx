import { Box, Container, Grid, List, ListItem, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountriesList from './CountriesList';
// import countries from '../countries.json'

const CountryDetails = () => {
  const { countryId } = useParams();
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [countryBorders, setCountryBorders] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const unique_response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId.toUpperCase()}`);
        setCountry(unique_response.data);
        setCountryBorders(unique_response.data.borders || []);
        const whole_response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        setCountries(whole_response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountry();
  }, [countryId]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Box sx={{ maxHeight: 'calc(100vh - 64px)', overflow: 'auto' }}>
            <CountriesList countries={countries} />
          </Box>
        </Grid>

        <Grid item md={8}>
          {country && (
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt="flag"
                        className="main-flag"
                      />
                      <Typography>{country.name.common}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Capital:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{country.capital}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Area:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{country.area} km²</Typography>
                    </TableCell>
                  </TableRow>
                  {countryBorders.length !== 0 && (
                    <TableRow>
                      <TableCell>
                        <Typography>Borders:</Typography>
                      </TableCell>
                      <TableCell>
                        <List>
                          {countryBorders.map((borderCountry) => {
                            const nearCountry = countries.find(
                              (country) => country.alpha3Code === borderCountry
                            );
                            return (
                              <ListItem key={borderCountry}>
                                <Link to={`/country/${nearCountry.alpha3Code}`}>
                                  {nearCountry.name.common}
                                </Link>
                              </ListItem>
                            );
                          })}
                        </List>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryDetails;
