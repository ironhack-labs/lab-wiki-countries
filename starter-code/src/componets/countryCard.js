import React from "react";
import { Link } from "react-router-dom";
const country =({name,flag,cca3})=>{

 return (
   <div>
     <Link to={`/${cca3}`}>
       {flag} {name.official}
     </Link>
   </div>
 );
}
export default country