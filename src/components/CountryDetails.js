import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CountryDetails(props) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const { countries } = props;
  const { alpha3Code } = useParams();
  const [country] = countries.filter(
    (country) => country.alpha3Code === alpha3Code
  );

  if (!country) {
    return <div className="text-red-500 font-bold">Country not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-4 text-center">
        {country.name.common}
      </h1>
      <div className="flex justify-between p-8 ">
        <div>
          <p className="text-lg font-semibold text-center">Capital:</p>
          <p className="text-lg text-center">{country.capital.join(', ')}</p>
        </div>
        <div>
          <p className=" text-center text-lg font-semibold">Currencies:</p>
          <p className=" text-center">
            {Object.entries(country.currencies).map(
              ([code, { name, symbol }]) => (
                <p key={code}>{`${name} (${symbol})`}</p>
              )
            )}
          </p>
        </div>

        <div>
          {' '}
          <p className="text-lg font-semibold text-center">Region:</p>
          <p className="text-lg text-center">{country.region}</p>{' '}
        </div>
        <div>
          <p className="text-lg font-semibold text-center">Subregion:</p>
          <p className="text-lg text-center">{country.subregion}</p>
        </div>

        <div>
          <p className="text-center text-lg font-semibold">Languages:</p>
          <p className="text-center">
            {Object.entries(country.languages).map(([code, name]) => (
              <p key={code}>{name}</p>
            ))}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoBack}
          className="bg-sky-400 text-white text-lg px-6 rounded-md py-1 hover:bg-sky-500 hover:shadow-md transition-all"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CountryDetails;
