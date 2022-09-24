import { Link } from 'react-router-dom'; 
import { useEffect, useState } from "react";


function CountriesList ({countries}){
const [contryArray, setContryArray] = useState([])

    useEffect(() => {
     setContryArray(countries)
    }, [countries])

    return (
        
        <div className="col-5" style={{'maxHeight': '90vh', 'overflow': 'scroll'}}>
            <div className="list-group">
            { contryArray.map(country => {
            
                return (
                        <div key={country.alpha3Code}> 

                            
                            <p> {country.name.common}</p>
                            <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">See Details</Link>
                          
                        </div>
                        )
                    }
                )
            }
            </div>
         </div> 
    )
}
    

export default CountriesList