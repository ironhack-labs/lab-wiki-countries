import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CountriesList ({countries}) {
    const [countriesList, setcountriesList] = useState([])

    useEffect(()=>{
        setcountriesList(countries)
    }, [countries])

    return (

                 <div className="col-5" style={{'maxHeight': '90vh', 'overflow': 'scroll'}}>  
                    <div className="list-group">
                    { countriesList.map(country => {
                        return (
                            <div key= {country.alpha3Code}>


                            <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png` }  alt= 'country' /> 

                            <br/> 
                            {country.name.common}
                            </Link>
                        </div>
                        )                        
                    })}

                    </div>
                </div>


    )

}

export default CountriesList