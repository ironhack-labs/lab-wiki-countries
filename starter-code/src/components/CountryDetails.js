import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class CountryDetails extends Component {
    render() {

        let theCountry = this.props.countries.find(eachCountry => { //What happend? matched the flag to the params id
            return eachCountry.flag === this.props.match.params.id
        })
        
 

        let theBorders = theCountry.borders.map(eachBorder=>{  //loop thru our countries borders 
            let theBorderCountry = this.props.countries.find(eachCountry=>{ 
                return eachBorder === eachCountry.cca3 //we use those border cca3s to match the cca3s in all the countries
            })

            //create a list item for each borderCountry and give it the flag and name 
            return (<li>
                <Link to={`/country/${theBorderCountry.flag}`}>
                <h1>{theBorderCountry.flag}</h1> <h4>{theBorderCountry.name.common}</h4>
                </Link>
            </li>)
        })


        return (
            <div className="col-7">
                <h1>{theCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{theCountry.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{theCountry.area} km
                    <sup>2</sup>
                            </td>   
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {theBorders}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetails
