import { Link, Outlet } from "react-router-dom"
//usamos useState: cambio del estado del componente.
import { useState } from "react"

const Countries = (props) => {
    const {allCountries} = props //destructuraccion de objetos
    //console.log(allCountries)
    //usamos .map para recorrer todo el array, y devolvernos un array nuevo con el mismo largo que el original
   
    //mensaje del input guardado en un estado local
    const [searchValue, setSearchValue] = useState('')

    function handleChange(event){
        event.preventDefault()
        setSearchValue(event.target.value)
        console.log(searchValue)
    }
   
    return (
        <>
        <div className="container">
            <div className="row">
                {/* listado de paises */}
         <div className="col-5" style={{maxHeight:'90vh', overflow: 'scroll'}}>
        <input onChange={(e)=>handleChange(e)} type="search" className="form-control me-2"
        placeholder="Search" ariaLabel="Search"
        />
            <div className="list-group">
                { //filtrado para usar busquedas
                    allCountries.filter(paisFilt=>{
                        if(searchValue === ''){ //si el value del search esta vacío, mostrar cada elemento normal
                            return paisFilt
                        }else if(paisFilt.name.common.toLowerCase().includes(searchValue.toLowerCase())){ //si el input cambia su estado verifica igualdad
                            return paisFilt
                        }
                    }).map((pais, index)=>{
                        return(
                            <Link key={index} className="list-group-item list-group-item-action" to={`/countries/${pais.cca3}`}> 
                            { `${pais.flag} ${pais.name.common}`}</Link>
                        )
                    })     
                }
             
              
            </div>
           
          </div>
          <div className="col-7">
          <Outlet/>
          </div>
          
            </div>
        </div>
        </>
    )
}

export default Countries
