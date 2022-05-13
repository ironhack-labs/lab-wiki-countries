
import { NavLink } from "react-router-dom"


function CountriesList (props) {

 return (
     <ul className='Container'>
         {props.countriesArr.map((e) => {
             return (
                 <div className='row'>
                     <div className='col-5'>
                         <li key={e._id} className="list-group" >
                             <NavLink to={`/${e.alpha3Code}`} className='list-group-item list-group-item-action'>{e.name.common}</NavLink>
                         </li>
                     </div>
                 </div>
             )
         })}
     </ul>
 )

}        



export default CountriesList
