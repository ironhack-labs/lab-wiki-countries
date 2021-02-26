import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'



export default function CountryDetails() {

    const [detail, setDetail] = useState()
    const {pais} = useParams()

    useEffect(()=>{
        const  responseAPI = async () =>{
             const detailCountry = await axios.get(`https://restcountries.eu/rest/v2/name/${pais}?fullText=true
             `)
             setDetail(detailCountry.data[0])
             console.log(detail)
            }
            responseAPI()
    },[pais])
    





    return (
        <div>
            {
                detail === undefined? (<p>Aqui veras los detalles del país seleccionado</p>):
                (
            <div className="col-10">
            <img width="100" src={detail.flag}/>
            <h1>{detail.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{detail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {detail.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                   
                    <ul>
                        {
                        detail.border === undefined? (
                            <p>No hay fronteras</p>
                        ):(
                            detail.border.map((e,id)=>{
                                return(
                                    <li>e</li>
                                )
                            })
                            
                        )
                        }
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
                )
            }
            
        </div>
    )
}
