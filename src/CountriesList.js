import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div class="container">
     <div className = "scrollable"  style={{ maxHeight: '500px' }}>

       {countries.map((country)=>{
       return(
        
        <div className = "country-list"> 
        
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}  alt="flag"/>

        
        <Link to = {`country/${country.alpha3Code}`}> {country.name.common} </Link>
        
        </div>
        
          )
       })}
       
       </div>
    </div>
  );
}

export default CountriesList;
