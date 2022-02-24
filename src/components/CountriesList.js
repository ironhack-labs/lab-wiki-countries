import { useState, useEffect } from 'react';
// import projectsData from "./../projects-data.json";  // <== REMOVE

function CountriesList(props) {
  // <== UPDATE
  const [countries, setCountries] = useState([]);

  // This effect depends on `props.projects`.
  // It will run on initial render, and every time
  // when the `props.projects` updates.
  useEffect(() => {
    setCountries(props.countries); // <== UPDATE
  }, [props.countries]); // <== UPDATE

  return (
    <div>
      <h1>Countries</h1>
      {countries.map((countries) => {
        return (
          <div key={countries.common} className="country">
            <h3>{countries.common}</h3>
            <p>{countries.alpha3Code}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
