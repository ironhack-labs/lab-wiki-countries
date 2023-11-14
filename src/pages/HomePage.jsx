import axios from "axios";
import { Link } from "react-router-dom";



function HomePage({countriesArr}) {

return( 
    <div>
     
  { countriesArr.map((obj, k) => {
return(
    <Link key={k} to={`/countries/${obj.alpha3Code }`}> 
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${obj.alpha2Code.toLowerCase()}.png`}></img>
    <br/>
   <li> {obj.name.common}</li>
    </Link>  

)})}
    
   
   
    

   </div>
)}



export default HomePage;
