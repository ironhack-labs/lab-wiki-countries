
function Navbar() {
    return (
        /*  <div>
             <nav classNameName="navbar navbar-dark bg-primary">
                 <div className="container-fluid">
                    <a href="/"> <span className="navbar-brand mb-0 h1 ms-3"><b>WikiCountries</b></span></a> 
                 </div>
                
             </nav>
         </div> */
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand ms-5" href="/"> Home </a>
           
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/countries"> Countries </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/details"> Details </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar