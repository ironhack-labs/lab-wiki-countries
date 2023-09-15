import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">WIKI-COUNTRIES</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button className="nav-link active" aria-current="page">Home</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar