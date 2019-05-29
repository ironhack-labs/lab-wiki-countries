import React from 'react'
// import countries from './../countries.json'

const CountryDetail = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <h1>France</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width:'30%'}}>Capital</td>
            <td>Paris</td>
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
    </React.Fragment>
  )
}

export default CountryDetail