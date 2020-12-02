import { NavLink } from 'react-router-dom'
import countries from '../../countries.json'


const CountriesList = () => {
    return (
      <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
          {countries.map(elm =>
              <NavLink className="list-group-item list-group-item-action" key={elm.cca3} to={elm.cca3}>
                {elm.flag} {elm.name.common}
              </NavLink>)}
        </div>
      </div>
    )
}

export default CountriesList