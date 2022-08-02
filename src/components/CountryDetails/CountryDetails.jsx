import {useParams,useLocation} from 'react-router-dom'  //nos va a regresar los parametros en la url
import {useEffect,useState} from 'react'
import axios from 'axios'

function CountryDetails(){
    //1.-  inicializamos nuestro hook de usePrams
const params = useParams()
//const location = useLocation()

console.log("que son los params",params)
//console.log("que son los location",location)
const [detailCountry,setDetailCountry]= useState({})
const [loading,setLoading] = useState(true)


useEffect(()=>{

    axios.get(` https://ih-countries-api.herokuapp.com/countries/${params.id}`)
    .then(res=>{
        console.log("el data",res.data)
        setDetailCountry(res.data)
        setLoading(false)
        
    })
    .catch(error=>console.log("el error es",error))

},[params.id])//el arreglo vacion solo para ejecutarse una vez : [vecino] es elq ue se ejecuta cada vez que la varible cambie





    return(
        loading ? <p>Estoy cargando</p> 
        :
        <div className="col-7">
        <h1></h1>
        <table className="table">
          <thead><h1>{detailCountry.name.official}</h1></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
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