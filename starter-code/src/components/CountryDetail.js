import React from 'react'
import {Link} from 'react-router-dom'
import AllCountries from '../components/AllCountries'
// import countries from '../countries.json'
// import AllCountries from './components/AllCountries'


class CountryDetail extends React.Component {
  

  render(){
    let theCountry = this.props.allCountries.find(eachCountry => { //What happend? matched the flag to the params id
      return eachCountry.cca3 === this.props.match.params.id
  })

  let theBorders = theCountry.borders.map(eachBorder=>{  //loop thru our countries borders 
    let theBorderCountry = this.props.allCountries.find(eachCountry=>{ 
        return eachBorder === eachCountry.cca3 //we use those border cca3s to match the cca3s in all the countries
    })

    //create a list item for each borderCountry and give it the flag and name 
    return (<li>
        <Link to={`/eachcountry/${theBorderCountry.cca3}`}>
        <h1>{theBorderCountry.flag}</h1> <h4>{theBorderCountry.translations.rus.official}</h4>
        </Link>
    </li>)
})
    return(
      <div className="col-7">
                <h1>{theCountry.name.native[0]}</h1>
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

export default CountryDetail