import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Countrysdets extends Component {
componentDidMount=()=>{

      // this.setState({
      //       country:country
      // })
}

      showBorders = () => {

      }

      render() {

            

            let idflag = this.props.match.params.id;
            let country = this.props.countrys.find((eachCountry)=>{
            return(
                  eachCountry.flag===idflag
            )});            return (
                  
                  <div>
                      <h1 className="title-bar" >{country.name.common}</h1>
                        <table className="table">
                        <thead></thead>
                        <tbody>
                        <tr style={{    border: 'groove'}}>
                              <td className="title-bar" style={{width:'60px', color:'white',border: 'groove',}}>Capital</td>
                              <td>{country.capital}</td>
                        </tr>
                        <tr style={{    border: 'groove'}}>
                              <td className="title-bar"  style={{width:'60px', color:'white',border: 'groove'}}>Area</td>
                              <td>{country.area} km
                              <sup>2</sup>
                              </td>
                        </tr>
                        <tr style={{    border: 'groove',  }}>
                              <td className="title-bar"  style={{width:'60px', color:'white',border: 'groove'}}>Borders</td>
                              <td>
                              <ul>
                              {country.borders.map(eachborder => {

                              let country = this.props.countrys.find(c => c.cca3 === eachborder)
                              return (<li><Link to={"/countries/"+country.flag}>{country.name.common}</Link></li>)
                                    // return (<li key={idflag}>
                                    //       <Link to={"/countries/" + idflag}>
                                    //         {
                                    //           this.props.countrys.find(country => country.flag === idflag)
                                    //             .name.common
                                    //         }
                                    //       </Link>
                                    //     </li>)
                              })}
                              </ul>
                              </td>
                        </tr>
                        </tbody>
                        </table>
                  </div>
            );
      }
}

export default Countrysdets;