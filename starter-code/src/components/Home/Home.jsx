import React, { Component } from 'react';
import axios from 'axios'
import List from './List';
import Detail from './Detail';

class Home extends Component{
    state = {
        countries: [],
        country: {}
    }

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
        .then(response => { 
            let countries = response.data
            this.setState({
                countries
            })
        })
        .catch(e=>console.log(e))
    }

    drawList = () => {
        const { countries } = this.state
        return countries.map((country, index) => <List getId={this.getId} key={index} {...country} />)
    }

    drawDetail = () => {
        const { currentId, countries } = this.state
        let country = countries.filter(c => currentId == c.cca3)
        if(country[0]) return <div style={{
            zIndex: 2
        }}>
            <Detail getId={this.getId} {...country[0]}/>
        </div>
    }

    getId = (id) => {
        this.setState({
            currentId:id
        })
    }


    render(){
        const {drawList, drawDetail} = this
        return <div>
            <nav className="navbar">
                <h1>WikiCountries</h1>
            </nav>
            <div className="wrapper">
                <div className="left-column">
                {drawList()}
                </div>
                <div className="right-column">
                {drawDetail()}  
                </div>
            </div>
        </div>
    }
}
export default Home