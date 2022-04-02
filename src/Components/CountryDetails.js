import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CountriesList from './CountriesList';
import styles from './CountryDetails.module.css';
import NavBar from './Navbar';
import axios from 'axios';

const renderBorders = ({ borders }) => {
  return (
    <>
      {borders.map((border) => {
        return (
          <div key={border.alpha2Code} className={styles.list}>
            <Link to={`/${border.alpha2Code}`}>{border.name.common}</Link>
          </div>
        );
      })}
    </>
  );
};

const CountryDetails = () => {
  const { id = 'GBR' } = useParams();

  const [countryDeets, setCountryDeets] = useState(undefined);
  const [allCountries, setAllCountries] = useState(undefined);

  useEffect(() => {
    const callAPI = async () => {
      const singleCountry = await axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then((resp) => resp.data);

      const allCountries = await axios
        .get(`https://ih-countries-api.herokuapp.com/countries`)
        .then((resp) => resp.data);

      const countryParams = allCountries.filter((el) => {
        return el.alpha3Code === id;
      });

      let borders = [];

      if (countryParams[0].borders.length > 0) {
        borders = countryParams[0].borders.map((code) => {
          const countryBorder = allCountries.filter(
            (el) => el.alpha3Code === code
          );
          return countryBorder[0];
        });
      }
      setAllCountries(allCountries);
      setCountryDeets({ country: singleCountry, borders });
    };

    callAPI();
  }, [id]);

  if (countryDeets === undefined) {
    return <>Loading...</>;
  }

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.countries_list}>
          <CountriesList allCountries={allCountries} />
        </div>
        <div>
          <>
            <div>
              <img
                src={`https://countryflagsapi.com/png/${countryDeets.country.alpha2Code.toLowerCase()}`}
              />
            </div>
            <div className={styles.name}>
              {countryDeets.country.name.common}
            </div>
            <div className={styles.details}>
              <div>Capital:</div>
              <div>{countryDeets.country.capital}</div>
            </div>
            <div className={styles.details}>
              <div>Area:</div>
              <div>{countryDeets.country.area} km²</div>
            </div>
            <div className={styles.details}>
              <div>Borders:</div>
              <div> {renderBorders(countryDeets)}</div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
