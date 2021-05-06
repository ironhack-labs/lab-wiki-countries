import countries from './../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = props => {
    return (
<div className="container">
  <div className="row">
          {/* EN COL style="max-height: 90vh; overflow: scroll" */}
          <div class="col-5" >
            
          <ul >
              {countries.map((elm, idx) => <li key={idx}><Link to={elm.cca3}>{elm.flag}{elm.name.common}</Link></li>)}
          </ul>
      
        </div>
    </div>
  </div>
)}

export default CountriesList