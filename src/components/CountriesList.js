import { ScrollSpy } from "bootstrap"
import { Link } from "react-router-dom"

function CountriesList(props){
    return(
    <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight:90 + 'vh', overflow:"scroll"}}>
            <div className="list-group">

              <Link className="list-group-item list-group-item-action" to="/ABW"><img src="https://flagpedia.net/data/flags/icon/72x54/aw.png"  /> Aruba</Link>

              <Link className="list-group-item list-group-item-action" to="/AFG">🇦🇫 Afghanistan</Link>

              <Link className="list-group-item list-group-item-action" to="/AGO">🇦🇴 Angola</Link>

              <Link className="list-group-item list-group-item-action" to="/AIA">🇦🇮 Anguilla</Link>

              <Link className="list-group-item list-group-item-action" to="/ALA">🇦🇽 Åland Islands</Link>

              <Link className="list-group-item list-group-item-action" to="/ALB">🇦🇱 Albania</Link>

              <Link className="list-group-item list-group-item-action" to="/AND">🇦🇩 Andorra</Link>

              <Link className="list-group-item list-group-item-action" to="/ARE">🇦🇪 United Arab Emirates</Link>

              <Link className="list-group-item list-group-item-action" to="/ARG">🇦🇷 Argentina</Link>

              <Link className="list-group-item list-group-item-action" to="/ARM">🇦🇲 Armenia</Link>

              <Link className="list-group-item list-group-item-action" to="/ASM">🇦🇸 American Samoa</Link>

              <Link className="list-group-item list-group-item-action" to="/ATA">🇦🇶 Antarctica</Link>

              <Link className="list-group-item list-group-item-action" to="/FLK">🇫🇰 Falkland Islands</Link>

              <Link className="list-group-item list-group-item-action active" to="/FRA">🇫🇷 France</Link>

              <Link className="list-group-item list-group-item-action" to="/ZWE">🇿🇼 Zimbabwe</Link>

            </div>
          </div>
        </div>
    </div>
    )
}

export default CountriesList