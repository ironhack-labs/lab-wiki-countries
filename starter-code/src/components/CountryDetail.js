import React, { Component, Fragment } from 'react'
import countries from '../countries.json'


class CountryDetail extends Component {
  state = {
    country: {}
  }

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  // console.log(id);
  //   const country = countries.find(country => country.cca3 === Number(cca3));
  //   this.setState({ country })
  // }

  render() {
  console.log(this.state.country);
    const country = this.state;

    return (
      <Fragment>
          <div className="col-7">
            <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>Capital</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>     
      </Fragment>
    );
  }
}

export default CountryDetail;