import {Link} from "react-router-dom"
function Navbar(){
    return(

      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <Link className="navbar-brand" to="/">WikiCountries</Link>
         {/*} <a className="navbar-brand" href="/">WikiCountries</a>*/}
        </div>
        </nav>
      </div>
  );
}

export default Navbar;