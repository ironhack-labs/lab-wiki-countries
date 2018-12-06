import React, { Component } from "react";
import { Link } from "react-router-dom";
import countryArray from "../countries.json";

function findCountry(oneCountryId) {
    return countryArray.find(oneCountry => {
        return oneCountry.cca3 === oneCountryId;
    });
}
class ItemCountry extends Component {
    render() {
        const { params } = this.props.match;
        const countries = findCountry(params.countryCode);
        return <div>
            <h1>{countries.name.common}</h1>
            <div>
              <div>
                <p>
                    <span>Capital: {countries.capital}</span>
                </p>
                <p>
                    <span>Area: {countries.area}</span>
                </p>
                <p>
                  <span>Borders</span>
                </p>
              </div>
            </div>
          </div>;
    }
}
export default ItemCountry;