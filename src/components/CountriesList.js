import { Link } from "react-router-dom";

function CountriesList({ countriesList }) {

  return (
    <div className="col-5">
      {countriesList.map((country) => {
        return (
          <div key={country.alpha3Code} className="border border-primary m-2 p-2">
            <img
              src={
                "https://flagpedia.net/data/flags/icon/72x54/" +
                country.alpha2Code.toLowerCase() +
                ".png"
              }
              alt={country.name.common}
            />
            <div >
              <Link to={`/${country.alpha3Code}`}> {country.name.common} </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CountriesList;
