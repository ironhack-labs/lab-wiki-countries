import './Navbar.css'

const Navbar = props => {
    return ( 
        <nav className="top-bar">
            <span>{props.title}</span>
        </nav>
    )
}

export default Navbar