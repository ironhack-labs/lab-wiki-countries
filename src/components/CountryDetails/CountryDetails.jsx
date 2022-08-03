import React from 'react';

//esto nos va a regresar los parametros en la URL => www.perrito.com/1234234234234/perrito
import { useParams,useLocation } from 'react-router-dom';

import {useEffect,useState} from "react"

import axios from "axios"


export default function CountryDetails() {

  // inicializamos params
  const params = useParams()
  // const location = useLocation()

  const {detailCountry,setDetailCountry} = useState({})
  const {loading,setLoading} = useState(true)

  useEffect(()=>{
    axios.get(` https://ih-countries-api.herokuapp.com/countries/${params.id}`)
    .then(res=>{
      console.log("EL DATA",res.data)
      setDetailCountry(res.data)
      setLoading(false)

    })
    .catch(error=>console.log("el error", error))
  },[params.id])//el arreglo vacio solo se ejecutauna vez, si tiene texto ejecuta cada vez que la variable cambie

  console.log("que son los params ",params)
  // console.log("que son los locations ",location)



  return (
    loading  ? <p>Estoy cargando por favor esperar</p> 
    ) : (
    <div className="col-7">
      <h1>{detailCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
