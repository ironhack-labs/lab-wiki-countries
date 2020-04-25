import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

class CountryDetail extends Component {

    render() {
        // Destructure the object to clean up code
        let { detail } = this.props.location.state;

        return(
        <div className="uk-section uk-width-3-4 colored">
            <div className="uk-container uk-container-small uk-padding-large">
              <h1>{detail.name.common}</h1>
  
              <table className="uk-margin-large-top">
                <tbody>
                  <tr>
                    <th>Capital</th>
                    <td>{detail.capital}</td>
                  </tr>
  
                  <tr>
                    <th>Area</th>
                    <td>{addCommas(detail.area)}</td>
                  </tr>
  
                  <tr>
                    <th>Borders</th>
                    <td>
                      <ul>
                        {detail.borders.length ? detail.borders.map((borderCountry, index) =>
                            <li key={index}><Link to="">{borderCountry}</Link></li>
                        ) : 'No borders'}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        )
    }
}

export default CountryDetail;