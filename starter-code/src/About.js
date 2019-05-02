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
    let miPais = this.state.movies.filter(patata => {
      return patata.name.common === this.props.match.params.id;
    });


      return (
        <div>
          
        <h3>Wiki paises</h3>

          <p>Tu pais es '{miPais[0].name.common}'</p>
          <ul>
            {miPais[0].borders.map(element => {
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

export default About;
