import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function CountriesList (props) {
  const [countries, setCountries] = useState([]);

  // This effect depends on `props.projects`.
  // It will run on initial render and every time
  // when the `props.projects` gets updated.
  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);


  return (
    <div>
      <h1>Projects</h1>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <section className='countryListHead'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag' />
            <h3>
              <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action"> 
                {country.name.common} 
              </Link>
            </h3>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
