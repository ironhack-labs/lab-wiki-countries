import { Link } from "react-router-dom"

const Navbar = () => {
    
    return (
        <>

        <nav class="navbar navbar-dark bg-primary mb-3">        
            <div class="container">            
            
                    <Link to={'/'} class="navbar-brand" >WikiCountries</Link>
            
            </div>
        </nav>

        </>
    )
}

export default Navbar