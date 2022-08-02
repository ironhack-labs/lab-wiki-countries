{/***
conts Navbar=({title="WikiCountries"})=>{
<nav className="navbar navbar-dark bg-primary mb-3 miNav">
  <div className="container">
    <a className="navbar-brand" href="/">{title}</a>
  </div>
</nav>
}
*/}

function Navbar({title ="WikiCountries"}){
   return(
  <nav className="navbar navbar-dark bg-primary mb-3 miNav">
  <div className="container">
    <a className="navbar-brand" href="/">{title}</a>
  </div>
</nav>
    )
}

export default Navbar;