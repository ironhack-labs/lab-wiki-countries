import { Link, useParams } from "react-router-dom"
const ContryDetails = (props) => {
    const {allCountries} = props
    const {cca3} = useParams()
    // Extraer la informacion necesaria del allCountris del pais clickeado
    const found = allCountries.find(pais => pais.cca3 === cca3)
    // Encontrar los objetos de cada borde
    const bordes = found.borders.map(cca3Borde => {
        return allCountries.find(country => country.cca3 === cca3Borde)
    })
    return (
        <div class="col-7">
            <h1>{found.name.common}</h1>
            <table class="table">
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{found.capital[0]}</td>
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
                        {
                            bordes.map((borde, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/countries/${borde.cca3}`}>{`${borde.flag} ${borde.name.common}`}</Link>
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

export default ContryDetails