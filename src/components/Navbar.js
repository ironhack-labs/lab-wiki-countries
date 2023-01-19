import { NavLink} from "react-router-dom";
function Navbar() {
    const baseURL = 'https://ih-countries-api.herokuapp.com'
        return (
            <div>
                <NavLink to='/countries'>Json Countries</NavLink>
                <NavLink to={baseURL + '/countries'}>API Countries</NavLink>
                
            </div>

        )

}
export default Navbar;