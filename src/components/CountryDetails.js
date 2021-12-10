import { useParams, Link } from "react-router-dom"

const CountryDetails = (props) => {
    const {allCountries} = props
    const {cca3} = useParams() //extraemos el dato con useParams
    const found = allCountries.find(pais => pais.cca3 === cca3)
    //para encontrar el elemento deseado, con este metodo establecemos la condición, en este caso, compara el pais clickeado, y luego el pais que buscamos con esa coincidencia
    //encontrar los objetos de cada limite regional para mostrar nombre completo!
    const limites = found.borders.map(cca3Limite => {
        return allCountries.find(country => country.cca3 === cca3Limite )
    })
    return (
        <>
            <h1>Country Details</h1>
            <h3>{found.name.common}</h3>
            <table className="table">
              
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{found.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                   {found.area}
                    &nbsp;km<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {
                          limites.map((border, index)=>{
                              return(
                                <li key={index}><Link  to={`/countries/${border.cca3}`}>{`${border.flag} ${border.name.common}`}</Link></li>
                              )
                          })
                      }
                     
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </>
    )
}

export default CountryDetails
