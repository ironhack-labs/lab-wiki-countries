import { useQuery } from "react-query";
import { getAllCountries } from "../../services/api";
import { Link } from "react-router-dom";




export const CountriesList = () => {

  const { isLoading, isError, data, error } = useQuery("countries", getAllCountries);


  if (isLoading) {
    return (
      <div className="spinner-border text-primary mt-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  
  return (
    <>
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">
          {
            data.map(country =>
              <Link key={country._id}
                to={`/countries/${country.alpha3Code}`}
                className="d-block list-group-item list-group-item-action"
                href="/ABW">
                <div>
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.alpha2Code}`} />
                </div>
                {country.name.common}
              </Link>
            )
          }
        </div>
      </div>
    </>
  );
}

