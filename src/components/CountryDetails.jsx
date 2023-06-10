import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import countries from '../countries.json';
import CountriesList from './CountriesList';

const CountryDetails = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [countryBorders, setCountryBorders] = useState([]);

  useEffect(() => {
    const usedCountry = countries.find(
      (country) => country.alpha3Code === countryId.toUpperCase()
    );
    setCountry(usedCountry);
    setCountryBorders(usedCountry?.borders || []);
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
                              <ListItem>
                                <Link
                                  key={borderCountry}
                                  to={`/country/${nearCountry.alpha3Code}`}
                                >
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
