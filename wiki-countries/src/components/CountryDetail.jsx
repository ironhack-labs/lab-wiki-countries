import React, {Component} from 'react'
import countries from './countries.json'
import {NavLink} from 'react-router-dom'
import { Card } from 'antd';


class CountryDetail extends Component{

  state={
      pais:{}
  }

  componentWillMount(){

  }

  render(){

      const {id} = this.props.match.params
      const pais = countries.find(p=>p.cca3===id)
      return(

    <Card
        title={pais.name?pais.name.common:''}
        style={{ width: 300 }}
                 >
            <p>Capital: {pais.name?pais.capital:''}</p>
            <p>Area: {pais.name?pais.area:''} Km</p>
           <h3>Borders:</h3>
            <ul>
            {pais.borders.map((b,i)=>{
                    const PaisBor = countries.find(p=>p.cca3===b)
                    return <li key ={i} ><NavLink to={`/detail/${PaisBor.cca3}`}>{PaisBor.name.common}</NavLink></li>
                })} 
            </ul>
        

        </Card>

          
      )
  }
}

export default CountryDetail