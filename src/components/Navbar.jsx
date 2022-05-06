function NavBar(props) {
    const pageTitle = props.title

    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">{pageTitle}</a>
            </div>
        </nav>
      );    
}
 
export default NavBar;



