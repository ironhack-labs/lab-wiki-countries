import { useParams, useLocation } from 'react-router-dom'; // para regresar los parámetros en la URL
import { useEffect, useState } from 'react'
import axios from 'axios';


function CountryDetails() {
    const [detailCountry, setDetailCountry] = useState({})
    const [loading, setLoading] = useState(true)
    //1. inicializamos useParams
    const params = useParams()
    //const location = useLocation () // para hacer consulta de la info que tenemos de manera local 

    console.log("que son los params", params)
    //console.log("que es el location ", location)
    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.id}`)
            .then(res => {
                console.log("el data", res.data)
                setDetailCountry(res.data)
                setLoading(false)
            })
            .catch(error => console.log("el error", error))
    }, [params.id]) // el arreglo vacío solo para ejecutrase una vez: [vecino] se va a ejecutar cada vez que la variable cambie

    return (
        loading ? <p>Estoy cargando, por favor espera 🙃</p>
            :
            <div className="col-7">
                <h1>{detailCountry.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{detailCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {detailCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
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
    )
}

export default CountryDetails;