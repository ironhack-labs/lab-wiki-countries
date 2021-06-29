import React from 'react' //ya no es necesario 
import {Link} from 'react-router-dom'
const CountriesList = ({countries = [0,1,2,3]}) =>(//asi se colocan valores por defecto
    <ul className="list-group">
        {
            countries.map((country,index_c)=>(
                <li key={index_c} className="list-group-item list-group-item-action">
                    <Link //esto es como un anchor
                        to={{
                            pathname:"/details", //esto es para crear <a> con react
                            state:country
                        }}
                    >
                    {country.flag}
                    {country.name.official}
                    </Link>
                </li>
            ))
        }
            

    </ul>
)

export default CountriesList;