
import {Link} from "react-router-dom";

function CountriesList() {
  return (
    <div className= "col-5" style="max-height: 90vh; overflow: scroll">
 <div className= "list-group"></div>


           {CountriesList.map((country) => {
return (
<div key={country.alpha3Code}>

    <Link className="list-group-item"
    to={`/${country.alpha3Code}`}
    />

    
</div>

)} 
            
            )}
        </div>

  )
}

export default CountriesList