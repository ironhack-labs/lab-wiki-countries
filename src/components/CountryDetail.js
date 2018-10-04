import React, {Component} from 'react'
import paises from '../countries.json'
import 'antd/dist/antd.css'
import { Card } from 'antd';


class CountryDetail extends Component{

    state={
        pais:{}
    }

    render(){
        const {id} = this.props.match.params
        const pais = paises.find(p=>p.cca3===id)
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title={pais.name?pais.name.common:''} bordered={false} style={{ width: 600, height:550 }}>
                    <p>Capital: {pais.capital?pais.capital:''}</p><hr/>
                    <p>Area:{pais.area?pais.area:''} km<sup>2</sup></p><hr/>
                    <p>Borders:{pais.borders?pais.borders.map(border => {
                        let bord = paises.find(a=>a.cca3===border).name.common
                        return(<ul>
                            <li>{bord}</li>
                        </ul>)
                    }):''}</p>
                </Card>
                    
              
            </div>     
        )
    }
}

export default CountryDetail