import React from 'react'
import {Link} from 'react-router-dom'

export default function Borders(props) {

    console.log(props)

    let getBorders = () =>{
        let borders = props.props.list.filter(each=>{
            console.log(props.theCountry.borders)
            for(let i = 0; i < props.theCountry.borders.length; i++){
                if (each.cca3 === props.theCountry.borders[i]){
                    return each
                }
            }
        })
        return borders.map(each=>{
            return(
                
                <Link to={'/country/'+each.cca3}>{each.name.common}</Link>
            )
        })
            
    }

    
    
        
        return (
            <div className="borders-links">
                {getBorders()}
            </div>
        )
}
