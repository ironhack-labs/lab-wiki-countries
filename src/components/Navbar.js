import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                    <a class="navbar-brand" href="/">WikiCountries</a>
                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Navbar
