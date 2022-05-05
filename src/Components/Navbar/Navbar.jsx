import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (

        <>
            <nav>
                <h3>
                    <Link to={`/`}>Wiki Countries</Link >

                </h3>
            </nav>
        </>

    )
}

export default Navbar