import React from "react";
import {Link} from 'react-router-dom';

import countries from "./countries.json";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: countries
    };
  }

  render() {
    let selectedMovie = this.state.movies.filter(movie => {
      return movie.name.common === this.props.match.params.id;
    });

    const sectionHeader = (
      <React.Fragment>
        <h3>About</h3>
        <p>Welcome to the about section</p>
      </React.Fragment>
    );

    if (selectedMovie.length === 0) {
      return (
        <div>
          {sectionHeader}

          <h1>Not found</h1>
        </div>
      );
    } else {
      return (
        <div>
          {sectionHeader}

          <p>Your chosen movie is '{selectedMovie[0].name.common}'</p>
          <ul>
            {selectedMovie[0].borders.map(element => {
                var findedurl = countries.filter(country=> country.cca3 === element)
                var cubs = "/about/" + findedurl[0].name.common;
              return(  <React.Fragment>
              <li > 
              <Link to={cubs} >{element} - {cubs}</Link>
              </li>
              
              </React.Fragment>)
    })}
          </ul>
        </div>
      );
    }
  }
}

export default About;
