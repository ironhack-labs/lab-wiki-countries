import React, { Component } from 'react';
import 'antd/dist/antd.css';
import countries from '../countries.json'
import { Card } from 'antd';
import {NavLink} from 'react-router-dom'



class CountryDetail extends Component {
    state = {
        countries: {}
    };


    render() {
        const {id} = this.props.match.params
        const countrie = countries.find(c=>c.cca3===id)


        return (
            <div className="fix">
                <Card
                    title={countrie.name?countrie.name.common:''}
                    style={{ width: 300 }}>
                    <h3> Capital: {countrie.capital?countrie.capital:''}</h3>
                    <h3> Area: {countrie.area?countrie.area:''}km2</h3>
                    <h3> Borders</h3>
                    <ul>
                        {countrie.borders.map((b,i)=>{
                            const c2 = countries.find(c=>c.cca3===b)
                            return <li key ={i} ><NavLink to={`/detail/${c2.cca3}`}>{c2.name.common}</NavLink></li>
                        })}
                    </ul>

                </Card>



            </div>
        )
    }
}

export default CountryDetail;
