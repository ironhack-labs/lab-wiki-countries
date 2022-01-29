import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  let { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${id}`
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // let newArr = [...data]
  // const [state, useState] = React.useState();

  const findCurrency = (value) => {
    for (let key in value) {
      if (value[key]) {
        return value[key];
      }
    }
  };

  let currency = findCurrency(data.currencies);

  // console.log(currency);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="ctn-country">
          <div>
            <img
              src={`https://flagcdn.com
/
256x192
/${data.alpha2Code.toLowerCase()}.png`}
              alt={data.name.common && data.name.common}
            />
            <h2>{data.name.common && data.name.common.toUpperCase()}</h2>
            <div className="country-card">
              <div className="card-left">
                <p>
                  <span>Official Name:</span>
                </p>
                <p>
                  {' '}
                  <span>Currency:</span>{' '}
                </p>
                <p>
                  {' '}
                  <span>Capital:</span>
                </p>
              </div>
              <div className="card-right">
                <p>{data.name.official && data.name.official}</p>
                <p>
                  {currency.name && currency.name} ({currency.symbol && currency.symbol})
                </p>
                <p>{data.capital && data.capital}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
