import React from "react"

const CountryDetail = props => {
  // const paramCca3 = props.match.params.cca3
  // const found = this.props.countries.find(found => found.cca3 === paramCca3)

  return (
    <>
      <div className="col-7">
        {/* <h1>{found.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{found.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {found.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <a href={found.cca3}>
                      {found.borders.map(el => (
                        <li>{el}</li>
                      ))}
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  )
}

export default CountryDetail
