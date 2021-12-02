import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeText = { color: 'red', backgroundColor: "black" }

    return (

        <nav>
            <h1>Paises</h1>
            <NavLink to="/" exact activeClassName="active-css-class" activeStyle={activeText}>Countries</NavLink>

        </nav>
    )
}

export default Navbar