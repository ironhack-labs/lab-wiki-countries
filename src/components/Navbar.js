import { NavLink } from 'react-router-dom'

const Navbar =()=>{

return(

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
  </div>
</nav>
)
}
export default Navbar