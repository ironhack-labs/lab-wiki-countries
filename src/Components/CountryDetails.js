import { Link, useParams } from "react-router-dom"


const CountryDetails = (props) => {
    
    const { allCountries } = props
    const { cca3 } = useParams()


    const found = allCountries.find(pais => pais.cca3 ===  cca3)
    
    const bordes = found.borders.map(cca3Border => {
        return allCountries.find(country => cca3Border === country.cca3)
    })


    return (
        <div class="col-7">
        <h1> {found.name.common} </h1>
        <table class="table">
          <tbody>
            <tr>
              <td style={{width: '30%'}}> Capital </td>
              <td> {found.capital[0]} </td>
            </tr>
            <tr>
              <td> Area </td>
              <td>
              {found.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {
                    bordes.map((borde, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/countries/${borde.cca3}`}>{`${borde.flag}  ${borde.name.common}`}</Link>
                            </li>
                        )
                    })
                }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetails


