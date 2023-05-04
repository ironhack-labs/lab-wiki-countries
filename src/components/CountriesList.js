import { Link } from "react-router-dom"

function CountriesList({ countries }) {
  return (
    <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
      {countries.map(country => {
        return (
      <Link className="list-group-item list-group-item-action" key={country.alpha3Code} to={`/${country.alpha3Code}`}>
        <img src="https://flagpedia.net/data/flags/icon/72x54/fr.png" alt="flag"/>
        {`${country.alpha2Code} ${country.name.common}`}
      </Link>
        )
      })}
      </div>
    </div>
  );
}

export default CountriesList;
