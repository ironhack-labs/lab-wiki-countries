import React from 'react'
import countries from '../countries.json'
import {NavLink} from 'react-router-dom'
import { Card} from 'antd'


class CountryDetail extends React.Component{
state={
  countries:{}
}
  
componentWillMount(){
    console.log(this.props)
  }
  render(){
    const {id} =this.props.match.params
    const c = countries.find(p=>p.cca3===id)
    return(
      <div className='fix'>
      <Card
      title={c.name?c.name.common:''}
      style={{ width: 300 }}>
      <h3> Capital: {c.capital?c.capital:''}</h3>
      <h3> Area: {c.area?c.area:''}km2</h3>
      <h3> Borders</h3>
      <ul>
        {c.borders.map((b,i)=>{
          const c2 = countries.find(p=>p.cca3===b)
          return <li key={i}><NavLink to={`/${c2.cca3}`}>{c2.name.common}</NavLink></li>
        })}
        </ul>
    </Card>
    </div>
    )
  }
}

export default CountryDetail