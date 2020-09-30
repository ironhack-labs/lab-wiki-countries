import React from 'react'

const CountryDetails = (props) => {

    const { params } = props.match
    //console.log(params.country)
    //console.log(props.countries)
    const country = props.countries.filter(elm => elm.cca3 === params.country)
    //console.log(country)
    
    return (
        <div className="col-7">
            <h1>{country[0].name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country[0].capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country[0].area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                    <ul>
                    {/* {country[0].borders.map(border => props.countries.filter(country => country.cca3 === border))}            */}
                    {/* <li><a href="/AND">Andorra</a></li> */}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default CountryDetails