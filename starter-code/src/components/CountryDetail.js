import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class CountryDetail extends Component{
  
  

    componentWillMount() {
      const {countries} = this.props.location.state;
      this.setState( {
        countries 
      });
    }
    
  

  render(){
    let country = this.state.countries.filter(c => {
      return c.cca3 == this.props.match.params.id;
    });
 
    return(
      
      <div className="col-7">
            <h1>{country[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
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
                    {country[0].borders.map(borderCountry => {
                    return (
                      <Link to={`/${borderCountry}`}>
                        <li>
                          <p>{borderCountry}</p>
                        </li>
                      </Link>
                    );
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

export default CountryDetail