import { Link } from 'react-router-dom'

const CountriesList = () => {
    return (
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
              <Link to="/ABW" className="list-group-item list-group-item-action">🇦🇼 Aruba</Link>
              <Link to="/AFG" className="list-group-item list-group-item-action">🇦🇫 Afghanistan</Link>
              <Link to="/AGO" className="list-group-item list-group-item-action">🇦🇴 Angola</Link>
              <Link to="/AIA" className="list-group-item list-group-item-action">🇦🇮 Anguilla</Link>
              <Link to="/ALA" className="list-group-item list-group-item-action">🇦🇽 Åland Islands</Link>
              <Link to="/ALB" className="list-group-item list-group-item-action">🇦🇱 Albania</Link>
              <Link to="/AND" className="list-group-item list-group-item-action">🇦🇩 Andorra</Link>
              <Link to="/ARE" className="list-group-item list-group-item-action">🇦🇪 United Arab Emirates</Link>
              <Link to="/ARG" className="list-group-item list-group-item-action">🇦🇷 Argentina</Link>
              <Link to="/ARM" className="list-group-item list-group-item-action">🇦🇲 Armenia</Link>
              <Link to="/ASM" className="list-group-item list-group-item-action">🇦🇸 American Samoa</Link>
              <Link to="/ATA" className="list-group-item list-group-item-action">🇦🇶 Antarctica</Link>
              <Link to="/FLK" className="list-group-item list-group-item-action">🇫🇰 Falkland Islands</Link>
              <Link to="/FRA" className="list-group-item list-group-item-action active">🇫🇷 France</Link>
              <Link to="/ZWE" className="list-group-item list-group-item-action">🇿🇼 Zimbabwe</Link>
            </div>
          </div>
    )
}

export default CountriesList