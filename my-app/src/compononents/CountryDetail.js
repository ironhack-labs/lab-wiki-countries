import React, {Component} from 'react'
import countries from '../countries.json'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {NavLink} from 'react-router-dom'




class CountryDetail extends Component{
  state={
    countries:{}
  }


  componentWillMount (){
    console.log(this.props)
  }





  render(){



    const {id}= this.props.match.params
    const c = countries.find(c => c.cca3 === id)
    return(
      <div className='fix'>
        <Card
          title={c.name?c.name.common:''}
          extra={<a href="#">Más</a>}
          style={{ width: 500 }}>
          <h3> Capital: {c.capital?c.capital:''}</h3>
          <h3> Area: {c.area?c.area:''}km2</h3>
          <h3> Borders</h3>
          <ul>
            {c.borders.map((b,i)=> {
            const c2 = countries.find(p=>p.cca3 === b)
            return <li key={i}><NavLink to={`/detail/${c2.cca3}`}>{c2.name.common}</NavLink></li> })} 
          </ul>
        </Card>
      </div>
    )
  }
}

export default CountryDetail