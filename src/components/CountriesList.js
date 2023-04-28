import { Link } from "react-router-dom"

function CountriesList ({country}) {
  return (
    <div className="container text-center">
      CountriesList
     
   
            <div class="row-cols-1 ">
      {country.map((countrie) => {
        return ( 
            <div class="col mt-4 border border-primary">
          <Link to={`/country/${countrie.alpha3Code}`}> 
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`} />
            <h2>{countrie.name.common}</h2>
          </Link>
      </div>
        );
      })}
      </div>
    </div>
  );
}

export default CountriesList;