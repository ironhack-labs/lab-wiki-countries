import { NavLink } from 'react-router-dom'

const CountriesList = () => {
    return (
        <div className="container">
            < div className="row" >
                < div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                    < div className="list-group" >
                            <NavLink className="list-group-item list-group-item-action" to="/ABW" >🇦🇼 Aruba</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/AFG">🇦🇫 Afghanistan</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/AGO">🇦🇴 Angola</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/AIA">🇦🇮 Anguilla</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ALA">🇦🇽 Åland Islands</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ALB">🇦🇱 Albania</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/AND">🇦🇩 Andorra</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ARE">🇦🇪 United Arab Emirates</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ARG">🇦🇷 Argentina</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ARM">🇦🇲 Armenia</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ASM">🇦🇸 American Samoa</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ATA">🇦🇶 Antarctica</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/FLK">🇫🇰 Falkland Islands</NavLink>
                            <NavLink className="list-group-item list-group-item-action active" to="/FRA">🇫🇷 France</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/ZWE">🇿🇼 Zimbabwe</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList