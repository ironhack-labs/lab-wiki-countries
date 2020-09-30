import React from 'react'
import { Link } from 'react-router-dom'

import countries from '../countries.json';

const CountriesList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: "scroll" }}>
                    <div className="list-group">
                        {countries.map((elm,idx) => <Link key={idx} className="list-group-item list-group-item-action" to={`/${elm.cca3}`}>{elm.name.common}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default CountriesList

// //{/* <>
// <Navbar />

// <Switch>
//   <Route path="/" exact render={() => <Home />} />
//   <Route path="/about" render={() => <About />} />
//   <Route path="/profile" render={() => loggedInUser ? <Profile user={loggedInUser} /> : <Redirect to="/" />} />
//   <Route path="/:season" render={props => <Clothes {...props} />} />
//   <Route path="/search" render={props => <Search {...props} />} />
// </Switch>
// {filteredMovies.map(elm => <MovieCard key={elm.id} {...elm} removeMovie={() => this.removeMovieFromState(elm.id)} />)}
// </> */}
