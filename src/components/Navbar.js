import React from 'react'


function Navbar() {
	return (
			<nav>
				<a class="navbar-brand" href="/">WikiCountries</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
					<div class="collapse navbar-collapse" id="navbarNav">
				</div>
			</nav>
	)
}

export default Navbar
