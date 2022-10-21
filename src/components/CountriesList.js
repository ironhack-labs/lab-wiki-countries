

import { Link} from "react-router-dom";


function CountriesList({countries}) {
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-5" >
          <div className="list-group">

            {countries.map((country) => {
                return(
                    <Link className="list-group-item list-group-item-action" key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                    <img src={ `//flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=""/>{country.name.official}
                    
                    
                    </Link>
                    
                )
            })}
            
          </div>
        </div>
      </div>
    </div>
  )
};

export default CountriesList;
