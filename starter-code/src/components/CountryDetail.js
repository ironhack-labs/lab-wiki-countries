import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate = () => {
    console.log("rafraichi");
    this.props.scrollActive();
  };

  render() {
    const { params } = this.props.match;

    function getCountry(id) {
      function byCca3(oneCountry) {
        return oneCountry.cca3 === id;
      }
      return countries.find(byCca3);
    }

    const foundCountry = getCountry(params.id);

    return (
      <section className="CountryDetail">
        <h2>{foundCountry.name.common}</h2>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {/* {console.log(foundCountry.borders)} */}
                  {foundCountry.borders.map(oneBorder => {
                    // return <li>{oneBorder}</li>;
                    return (
                      <li key={oneBorder}>
                        <Link to={`/${getCountry(oneBorder).cca3}`}>
                          {getCountry(oneBorder).name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default CountryDetail;
