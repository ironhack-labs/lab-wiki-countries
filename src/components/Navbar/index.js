import { Outlet, Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <Link class="navbar-brand" href="/">WikiCountries</Link>
        </div>
      </nav>
      <Outlet/>
      </>
    )
}

export default Navbar