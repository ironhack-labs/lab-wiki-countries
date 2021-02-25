import { Link, useParams } from "react-router-dom"

const CountryDetails = (props) => {

    console.log('-----ESTAS SON LAS PROPS DE REACT ROUTER DOM-----', props)

    const params = props.match.params

    const selectedCountryArr = props.countries.filter(elm => elm.cca3 === params.cca3)
    
    console.log('-----ESTE ES EL PAIS -----', selectedCountryArr)


    return (
        <>
    {/* <div className="container"> */}
        {/* <div className="row"> */}
            <div className="col-7">
            <h1>{selectedCountryArr[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{selectedCountryArr[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{selectedCountryArr[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    
                    {selectedCountryArr[0].borders.map(elm => <li><Link to={`/${elm}`}>{elm}</Link></li> )}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        {/* </div> */}
    {/* </div> */}
        </>
    )
}

export default CountryDetails