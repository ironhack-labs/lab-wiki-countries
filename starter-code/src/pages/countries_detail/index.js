import data from '../countries.json'

import React, { Component } from 'react'
import List from '../../components/List.js'
import Nav from '../../components/Nav.js'
import Detail from '../../components/Detail.js'

export default class CountriesDetail extends Component {
    state={
        countries:[...data],
        country:null
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const data=[]
        await this.state.countries.forEach((country)=>{
            if (id.toString()===country.cca3.toString()) {
                data.push(country)}
        } )
        let pais={ ...data[0] }
        this.setState({ country: { ...pais } })
      }
    render() {
        const {country}=this.state
        if(!country)
        return (
            <> <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <List data={this.state.countries}/>
                    </div>
                    <p>Loading...</p>
                </div>
            </div>
            </>
        )
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <List data={this.state.countries}/>
                        </div>
                        <Detail country={this.state.country}/>
                    </div>
                </div>
            </>
        )
    }
}


      