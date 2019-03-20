import React, {Component} from 'react'
import countries from '../countries.json'



class CountryDetail extends Component{
    
    componentDidMount(){
        this.getCountry(this.props.match.params.cca3)

    }
    componentWillReceiveProps(nextProps){
        this.getCountry(this.props.match.params.cca3)
    }

    getCountry = cca3 => {
        //buscar el pais en el countries json con condicion cca3 y guardarlo en el estado
        const country = countries.find(x => x.cca3 === cca3)
        this.setState({
            ...this.state,
            country
        })
    }

    render(){
        return(
            this.state? 
        <div>
            <h1>{this.state.country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Country</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

        </div> : <div>Loading</div>
        )
    }
}
    

export default CountryDetail