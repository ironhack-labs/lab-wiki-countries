import React,{Component} from 'react'
import axios from 'axios'
import Country from './Country'
class Home extends Component{
    state = {
        countries:[]
    }
    componentWillMount() {
        axios.get(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
            .then(res => {
                const countries = res.data;
                this.setState({ countries });
            })
    }
    drawCountries =()=>{
        const {countries} = this.state
        return countries.map((element,index) => <Country key={index} {...element}  />)
    }
    render(){
        const {countries} = this.state
        console.log(countries)
        return(
            <div className="halfScreen">
                <h1>Home</h1>
                <ul className="list-group">
                    {this.drawCountries()}
                </ul>
            </div>
        )
    }
}

export default Home