import React from "react";

const Countries = (props) => {

return (

  <div id="root">
  <div>
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">WikiCountries</a>
      </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-5" >
          <div className="list-group">
            <a className="list-group-item list-group-item-action" href="/">🇦🇼 {props.name.common}</a>
            {/* <Link to={`/projects/${this.props.cca3}`}>{this.props.name.common}</Link> */}

          </div>
        </div>
        <div className="col-7">
          <h1>{props.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{props.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{props.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>{props.borders.map((border) => {
                      console.log(border)
                      return border 
                    })} </li>
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
      </div>
    </div>
  </div>
</div>
)
}


export default Countries;