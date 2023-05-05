import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-primary mb-3">
			<div className="container">
				<NavLink to='/' className="navbar-brand">LAB - WikiCountries</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
