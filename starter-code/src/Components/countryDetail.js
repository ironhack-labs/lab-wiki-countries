import React, {Component} from 'react';
import countries from '../countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

class countryDetail extends Component {
    componentWillMount(){
        console.log(this.props.match.params)
        const {cca3} = this.props.match.params;
        this.setState({
            cca3
        })
    }
    
    render(){
        const {cca3} = this.state
        let country = countries.filter(c=>{
            return c.cca3 == cca3
        })


        return(
            <div className="col-7">
            <h1>{country[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country[0].borders.map(frontera=>{
                            

                            return(
                                <Link to={`/country/${frontera}`}>
                <li><p>{frontera}</p></li>
                </Link>
                            )
                        })}
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>

        )
    }


}
export default countryDetail
