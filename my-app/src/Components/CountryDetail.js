import React, { Component } from "react";
import { Link } from "react-router-dom";



export class CountryDetail extends Component {
  render() {

  let allCountries = this.props.data;
  let country = allCountries.filter(e => e.cca3 === this.props.id);//conseguimos array con objeto country dentro
  let allBorders = country[0].borders;//indice 0 me permite entrar dentro de ese objeto y con.borders sacamos los vecinos, pero solo el codigo unico
  
  let bordersArray = [];
  allBorders.forEach(e => 
    { bordersArray.push( allCountries.filter (border => 
      {//añadimos al array vacio borders cada pais vecino como un array
          if (border.cca3 === e) {
            return border.name.official
            
          }
        })
      );
    });
    

    let borders = bordersArray.map(e => e[0]);//convertirmos a array
    console.log(borders)

    return (
      <div>
        <h3>{country[0].name.official}</h3>
        <hr />
        <h4>Capital: {country[0].capital}</h4>
        <hr />
        <h4>Area: {country[0].area} km²</h4>
        <hr />
        <h4>Borders</h4>
        <ul className="col-8">
          {borders.map(e => (//recorremos array de objetos y creamos link en el nombre de cada onjeto
            <Link to={e.cca3}>
              <li key={e.cca3}>{e.name.common}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
