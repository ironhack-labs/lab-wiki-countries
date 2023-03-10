import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const { countryCode } = useParams();
  const [theCountry, setTheCountry] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await props.countryData(countryCode);
      setTheCountry(data);
    };
    getData();
  }, [countryCode, props]);

  return (
    theCountry ? (
      <div
        className="d-flex flex-column countryDetails"
        style={{ maxWidth: '500px', minWidth: '400px', gap: '30px' }}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src={`https://flagpedia.net/data/flags/w1160/${theCountry.alpha2Code.toLowerCase()}.webp`}
            style={{ height: '150px' }}
            alt=""
          />
        </div>
        <h1 style={{ textAlign: 'center' }}>{theCountry.name.official}</h1>
        <div className="row">
          <div className="col-4">Capital</div>
          <div className="col-8">{theCountry.capital[0]}</div>
        </div>
        <div className="row">
          <div className="col-4">Area</div>
          <div className="col-8">
            {theCountry.area.toLocaleString()} km <sup>2</sup>
          </div>
        </div>
        <div className="row">
          <div className="col-4">Borders</div>
          <div className="col-8">
            {theCountry.borders && theCountry.borders.length
              ? theCountry.borders.map((border) => {
                  return (
                    <div key={border.toLowerCase()}>
                      <Link to={`/country/${border.toLowerCase()}`}>
                        {props.countryName(border)}
                      </Link>
                    </div>
                  );
                })
              : 'None'}
          </div>
        </div>
      </div>
    ) : <div>Country not Found</div>
  );
}

export default CountryDetails;
