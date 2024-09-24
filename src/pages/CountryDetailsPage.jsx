import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

  const params = useParams()

  const [countryDetails, setCountryDetails] = useState(null)

  useEffect(() => {
    getData()
  }, [params.countryId])

  const getData = async () => {
    setCountryDetails(null)

    try {
      const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`)
      const data = await response.json()
      console.log(response)
      setCountryDetails(data)
    } catch (error) {
      console.log(error)
    }
  }

  if(countryDetails === null) {
    return <div>Loading...</div>
  }

  console.log(countryDetails)

  return (
    <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        <h1>{countryDetails.name.common}</h1>
        <img
                style={{ width: "150px" }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
                alt="icon"
              />

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryDetails.borders.map((eachBorder, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/${eachBorder}`}>{eachBorder}</Link>
                      </li>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default CountryDetails;
