import React, { Component } from 'react';

import countries from './../countries';

import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = countries.find(item => item.cca3 === id);
    return {
      ...state,
      country
    };
  }

  render() {
    const country = this.state.country;
    console.log(country);
    return (
      (country && (
        <div>
          <h1>{country.name.common}</h1>
          <div >
            <div className="col-5">Capital</div>
            <div className="col-7">{country.capital}</div>
          </div>
          <div>
            <div className="col-5">Area</div>
            <div className="col-7">
              {country.area} km<sup>2</sup>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-5">Borders</div>
            <div className="col-7">
              <ul className="p-3">
                {country.borders.map(border => (
                  <Link to={`/country/${border}`}>
                    <li key={border}>
                      {countries.find(item => item.cca3 === border).name.common}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )) || <div></div>
    );
  }
}

  























// import React, {Component} from 'react';
// import countries from "./../countries.json";
// import {Link} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Cards from 'react-bootstrap/Cards';

// import ListGroup from 'react-bootstrap/ListGroup'

// export default class CountryDetails extends Component  {

//   render() {
//   return (
// //     <div className="flags">

// // <Card>
// //   <Card.Img variant="top" src="https://www.countryflags.io/${props.country.cca3.png" />
// //   <Card.Body>
// //     <Card.Title>Card Title</Card.Title>
// //   </Card.Body>
// // </Card>

// // </div>
    
//     <div>

      

//       <ListGroup>
//      {countries.map(country => (

//        <ListGroup.Item>
//          Country : {country.name.common}
//          <br/>
//          Capital {country.capital[0]}
//          <br/>
//          Area {country.area}km2
//          <br/>
//          {/* {country.border[]} */}
//      </ListGroup.Item>
         
//          ))}
//          </ListGroup>
     
//     </div>
//   );


//      }}
