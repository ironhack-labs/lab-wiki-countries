import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const api = 'https://ih-countries-api.herokuapp.com/countries?';

function CountriesList(props) {
  const { allCountries } = props;

  // console.log(allCountries);

  const [countries, setCountries] = useState([allCountries]);

  //console.log(countries)

  useEffect(() => {
    // create an async await function
    // Get the project by id from the server
    axios.get(api + countries.alpha3Code).then((response) => {
      setCountries(response);
    });
  }, [countries]);

  console.log(countries);

  return (
    <div>
      <h3>Countries</h3>

      {countries.map((eachCountry) => {
        return <Link> {eachCountry} </Link>;
      })}
    </div>
  );
}

export default CountriesList;
