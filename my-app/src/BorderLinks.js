import React from 'react';
import data from './countries.json';
import { Link } from 'react-router-dom';

export default class BorderLinks extends React.Component{
  constructor({cca3}){
    super();
    const name = data.filter(e => e.cca3.includes(cca3))[0].name.common;
    this.state = {
      name: name,
      cca3: cca3
    }
  }

  render(){
    let {name, cca3} = this.state;
    return (
      <li><Link to={`/${cca3}`}>{name}</Link></li>
    )
  }
}