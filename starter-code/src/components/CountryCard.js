import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
//import queryString from 'query-string'

class CountryCard extends Component {

    goBack = () => {
        this.props.history.go(1)
    }

    render() {
        /* const student = this.props.list[this.params.studentId];
        if (!student) {
            return null;
        } */
        // console.log(this.props.country.name)
        return (
            <div className="col-7">
              <h1>{this.props.country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>holabb</td>
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
                        <li><a href="/BEL">Belgium</a></li>
                        <li><a href="/DEU">Germany</a></li>
                        <li><a href="/ITA">Italy</a></li>
                        <li><a href="/LUX">Luxembourg</a></li>
                        <li><a href="/MCO">Monaco</a></li>
                        <li><a href="/ESP">Spain</a></li>
                        <li><a href="/CHE">Switzerland</a></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            /* <div style={{color: this.values.color, fontSize: this.values.fontSize}}>
            Nombre: {this.props.list[this.params.studentId].name}
            Edad: {this.props.list[this.params.studentId].age}
            <Link to="/">Regresar</Link>
            <button onClick={this.goBack}>Regresar sin link</button>
        </div> */)
    }
}

export default CountryCard;