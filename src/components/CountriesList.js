import countries from './../countries.json'
import {Link} from 'react-router-dom'

const CountriesList =()=>{
    
    return(

countries.map((eachCountry)=>{
return(
<div className="container">
    <ul className="list-group">
    <Link className="list-group-item" to={`/${eachCountry.cca3}`}>{eachCountry.flag}__{eachCountry.name.common}</Link>
</ul>
</div>
)})
)
}
export default CountriesList