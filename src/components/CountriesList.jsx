import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return(
    <div className="col-3 overflow-auto" style={{ height: 450}}>
        {countries.map((country) => (
          <div className="d-flex flex-column border" key={country.alpha3Code}>
            <Link
              style={{ display: "block", margin: "1rem 0", textDecoration: "none", color: "black"}}
              to={`/${country.alpha3Code}`}
              key={country.alpha3Code}
            >
              
              <img className="align-self-center" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                alt={country.alpha2Code} 
                width="40"
              />
              <div className="p-2">
                {country.name.common}
              </div>
            </Link>
          </div>  
        ))}
    </div>
  );
}

export default CountriesList;