import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full  max-w-screen-xl mx-auto px-6 ">
      <div className="flex justify-center p-4 px-3 py-10">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4 ml-2 ">
            <div className="block text-gray-700 text-center  font-semibold py-2 px-2 text-2xl">
              Country List
            </div>
            <div className="flex items-center bg-gray-200 rounded-md ">
              <div className="pl-2 ">
                <svg
                  className="fill-current text-gray-500 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
              <input
                className="w-full text-xl rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                id="search"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div
              className="py-3 text-lg text-center "
              style={{ maxHeight: '70vh', overflowY: 'scroll' }}
            >
              {filteredCountries.map((country) => (
                <Link
                  key={country.alpha3Code}
                  to={`/country-details/${country.alpha3Code}`}
                  className=""
                >
                  {' '}
                  <div className="bg-white p-4 hover:text-sky-400 transition-all">
                    {country.name.common}{' '}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
