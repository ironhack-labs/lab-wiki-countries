import { NavLink } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList(props) {
  return (
    <section className="Countries-shown">
      <div className="Countries-list">
        {props.countries.map((country, index) => {
          return (
            <div key={index} className="Countries-card">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag"
              />
              <NavLink to={`/${country.alpha3Code}`}>
                <h3>{country.name.common}</h3>
                <br />
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
}