import { Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetail() {
  const [country, setCountryDetail] = useState({});
  const { name } = useParams();

  async function getCountryDetailsData() {
    const { data } = await axios.get(
      `https://restcountries.com/v2/name/${name}`
    );
    setCountryDetail(data[0]);
  }

  useEffect(() => {
    getCountryDetailsData();
  }, [name]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={country.flag} alt={country.name} style={{ width: 400 }} />
      <h1 style={{ textAlign: 'center' }}>
        {country.name ? country.name : 'Loading...'}
      </h1>
      <Typography.Text type="secondary">
        {' '}
        Area: {country.area ? `${country.area} m2` : 'Loading...'}
      </Typography.Text>
      <p>
        Borders:{' '}
        {country.borders
          ? country.borders.map((border) => (
              <Link
                to={`/countries/${border}`}
                key={border}
                style={{ margin: '0 8px' }}
              >
                {border}
              </Link>
            ))
          : 'No Borders'}
      </p>
    </div>
  );
}

export default CountryDetail;
