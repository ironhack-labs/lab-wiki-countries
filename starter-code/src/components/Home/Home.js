import React, { Component } from "react";
import ListCountry from '../ListCountry/ListCountry';
import CountryJS from './countries.json';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            listC: CountryJS
        }
    }
    handleClick = () => {

    }
  render() {
      const {listC} = this.state;
      //console.log(listC)
    return (
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
            {listC.length > 0 ? listC.map((country, index) => <ListCountry key={index} country={country} index={index}/>) : <strong>No hay nada que mostrar</strong>}  
            </div>
            </div>
        </div>
    );
  }
}

export default Home;
