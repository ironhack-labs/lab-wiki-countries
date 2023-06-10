import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}> Wiki Countries </NavLink>
    </div>
  )
}

export default Navbar
