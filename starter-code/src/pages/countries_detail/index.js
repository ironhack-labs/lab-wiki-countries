import data from '../countries.json'

import React, { Component } from 'react'
import List from '../../components/List.js'
import Nav from '../../components/Nav.js'
import Detail from '../../components/Detail.js'

export default class CountriesDetail extends Component {
    state={
        countries:[...data],
        country:null,
        borders:null
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
        const data2=[]
        await this.state.countries.forEach((country)=>{
            if (this.state.country.borders.includes(country.cca3.toString())) {
                data2.push([country.cca3,country.name.common])}
        } )
        this.setState({borders:[...data2] })
      }
    render() {
        const {country}=this.state
        const {borders}=this.state
        if(!country || !borders)
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
                        <Detail country={this.state.country}
                            borders={this.state.borders}
                        />
                    </div>
                </div>
            </>
        )
    }
}


      