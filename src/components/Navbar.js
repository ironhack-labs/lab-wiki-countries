import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="nav-style">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/countries">Countries</Link>
				</li>
			</ul>
		</nav>
	)
}