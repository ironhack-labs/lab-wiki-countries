import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

////ABAJO ESTA COMENTADO EL BONUS (DESCOMENTAR TODO MENOS EL MAPEO DE LOS BORDERS)

function CountriesDetails({ countries }) {

    const { id } = useParams()

    const [selectedCountry, setSelectedCountry] = useState(countries)


    useEffect(() => {
        const selected = countries.filter(elem => elem.alpha3Code === id)
        setSelectedCountry(selected)
    }, [id])


    return (
        <div>
            <h1>Detalles de País</h1>

            {selectedCountry.map((country) => {
                return (
                    <div className="container">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        <p>{country.name.common}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <span>Capital</span>
                            </div>
                            <div className="col-md-6">
                                <span>{country.capital}</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-6">
                                <span>Area</span>
                            </div>
                            <div className="col-md-6">
                                <span>{country.area} Km2</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-6">
                                <span>Borders</span>
                            </div>
                            <div className="col-md-6">
                                {country.borders.map((border) => {
                                    return (
                                        <div className="container">
                                            <div className="row">
                                                <Link to={`/${border}`}>{border}</Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div></div>
                    </div>

                )
            })}

            <Link to="/">Volver a Countries</Link>

        </div>
    )
}
export default CountriesDetails


////////////////// DEJO COMENTADO EL MAPEO DE LOS BORDERS YA QUE DA PROBLEMAS


// import { Link, useParams } from "react-router-dom"
// import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import '../../styles/details.css'
// import axios from 'axios'


// function CountriesDetails() {

//     const { id } = useParams()

//     const [selectedCountry, setSelectedCountry] = useState([])
//     const [fetching, setFetching] = useState(true)

//     useEffect(() => {
//         fecthCountry()
//     }, [selectedCountry])
//     const fecthCountry = () => {
//         axios
//             .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
//             .then(response => {
//                 setSelectedCountry({ ...response.data })
//             })
//     }





//     return (

//         <div>

//             {[selectedCountry].map(({ alpha2Code, name, capital, area, borders }) => {

//                 return (
//                     <div>
//                         {console.log(borders)}
//                         <h1>Detalles de País</h1>
//                         <div className="container">
//                             <img src={`https://flagpedia.net/data/flags/icon/72x54/${(alpha2Code + '').toLowerCase()}.png`} />
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <span>Capital</span>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <span>{capital}</span>
//                                 </div>
//                             </div>
//                             <hr></hr>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <span>Area</span>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <span>{area} Km2</span>
//                                 </div>
//                             </div>
//                             <hr></hr>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <span>Borders</span>
//                                 </div>
//                                 <div className="col-md-6">
//                                     {/* {[borders].map((border) => {
//                                         return (
//                                             <div className="container borders">
//                                                 <div className="row">
//                                                     <Link to={`/${border}`}>{border}</Link>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })} */}
//                                 </div>
//                             </div>
//                             <div></div>
//                         </div>



//                         <Link to="/">Volver a Countries</Link>

//                     </div >
//                 )
//             })}
//         </div>

//     )
// }
// export default CountriesDetails