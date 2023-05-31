import { Link } from "react-router-dom";


export function CountriesList({countries}){
    return(
      <>
    <div className="list-group" style={{width: '500px',maxHeight: "800px", overflow: 'scroll'}}>
        {countries.map((country) => {
          return(
           <div className="list-group-item list-group-item-action d-flex justify-content-start">
            <Link className="text-decoration-none text-dark"  to={`/country`}> <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={{width: "25px"}} alt={country.name.common} /> {country.name.common}</Link>
            </div>
          );
        })}
        </div>
      </>
    );
}