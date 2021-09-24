import {Link} from "react-router-dom"; 
 
 const CountryItem = ({name, cca3, cca2})=>{
     return (
         <Link className="list-group-item list-group-item-action" to={`/${cca3}`}>{cca2} - {name}</Link>
     )
 } 


 export default CountryItem; 