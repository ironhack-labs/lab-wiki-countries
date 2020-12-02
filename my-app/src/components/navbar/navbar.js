import './navbar.css'

const Navbar = ()=>{
    
    return (<div className="nav">
        <input type="checkbox" id="nav-check"/>
            <div className="nav-header">
                <div className="nav-title">
                    WikiCountries
    </div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <a href="/" target="_blank">Home</a>
              
            </div>
</div>)

    
    
}
export default Navbar




