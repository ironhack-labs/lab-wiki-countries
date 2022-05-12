import { NavLink } from "react-router-dom";
const Navbar=()=>{
  return(
    <div className='Navbar'>
<h1>Wiki Countries</h1>
<NavLink to='/'>Back to Home</NavLink>

    </div>
  )
}

export default Navbar;