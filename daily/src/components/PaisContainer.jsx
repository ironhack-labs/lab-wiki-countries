import React, {Component} from 'react'
import PaisDisplay from './PaisDisplay';
import {NavLink, withRouter} from 'react-router-dom'
import Routs from '../Routs'


class PaisContainer extends Component{
    render(){
      const {info} = this.props
      return(
        <div>
          <ul>
            {info.map((p,i)=> (
              <li key={i}>
                <NavLink exact to="/">GGGG</NavLink>
              </li>
            )) }
          </ul>
          

          <PaisDisplay info={info} />
          
        </div>
      )
    } 
}



export default PaisContainer