import React, { useState, useEffect } from 'react';
import { Col, Row, Divider } from 'antd';
import axios from 'axios';
import CountryDetails from './CountryDetails';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  async function fetchData() {
    const { data } = await axios.get('https://restcountries.com/v2/all');
    setCountries(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Divider orientation="center">Countries</Divider>
      <Row gutter={[16, 24]}>
        {countries.map((country) => (
          <Col span={24} key={country.name}>
            <CountryDetails {...country} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CountriesList;
