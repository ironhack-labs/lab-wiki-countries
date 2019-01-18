import React from "react"
import { NavLink } from 'react-router-dom';
export const ListItem = ({data})=>{
   const {flag,name,cca3}= data
    return(
        <NavLink  className="list-group-item list-group-item-action" to={`/${cca3}`}><span>{flag}</span>{name.official}</NavLink>
    )
}
