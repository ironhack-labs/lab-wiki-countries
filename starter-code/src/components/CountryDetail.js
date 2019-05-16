import React, { Component } from "react";
import countries from '../countries.json';
import { Link } from "react-router-dom";
const countryStyles = {
  textAlign: "left"
};

class CountryDetail extends Component {
  render() {
      console.log(this.props.match.params)
           
      let countryinfo = {};
            for (let i = 0; i < countries.length; i++) {
              if (this.props.match.params.cca3 == countries[i].cca3) {
                countryinfo = countries[i];
              }
        
              //   console.log(countries[i].cca3);
            }
            console.log(countryinfo);
            //JS find method or loop
        
            return (
              <div className="col-7" style={countryStyles}>
                <h1>{countryinfo.name.common}</h1>
                <table className="table">
                  <thead />
                  <tbody>
                    <tr>
                      <td>Capital</td>
                      <td>{countryinfo.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {countryinfo.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          {countryinfo.borders.map(border => {
                            let borderCountry = {};
                            for (let i = 0; i < countries.length; i++) {
                              if (border == countries[i].cca3) {
                                borderCountry = countries[i];
                              }
                            }
                            return (
                              <li>
                                <Link to={`/country/${borderCountry.cca3}`}>
                                  {borderCountry.name.common}
                                </Link>
                              </li>
                            );
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
        

    
    
    
    
    
    
    
    
    
    
    
    
    
    
        //   <div id="root">
    //     <div>
    //       <nav class="navbar navbar-dark bg-primary mb-3">
    //         <div class="container">
    //           <a class="navbar-brand" href="/">
    //             WikiCountries
    //           </a>
    //         </div>
    //       </nav>
    //       <div class="container">
    //         <div class="row">
    //           <div class="col-5"></div> 
    //           <span style={{maxheight: "90vh", overflow: "scroll",}}>
    //             <div class="list-group">
    //               <a class="list-group-item list-group-item-action" href="/ABW">
    //               <span role="img" aria-label="Aruba">🇦🇼 Aruba</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/AFG">
    //               <span role="img" aria-label="Afghanistan">🇦🇫 Afghanistan</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/AGO">
    //               <span role="img" aria-label="Angola">🇦🇴 Angola</span>  
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/AIA">
    //               <span role="img" aria-label="Anguilla"> 🇦🇮 Anguilla</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ALA">
    //               <span role="img" aria-label="Åland Islands"> 🇦🇽 Åland Islands</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ALB">
    //               <span role="img" aria-label="Albania"> 🇦🇱 Albania</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/AND">
    //               <span role="img" aria-label="Andorra"> 🇦🇩 Andorra</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ARE">
    //               <span role="img" aria-label="United Arab Emirates"> 🇦🇪 United Arab Emirates</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ARG">
    //               <span role="img" aria-label="Argentina"> 🇦🇷 Argentina</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ARM">
    //               <span role="img" aria-label="Armenia"> 🇦🇲 Armenia</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ASM">
    //               <span role="img" aria-label="American Samoa"> 🇦🇸 American Samoa</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ATA">
    //               <span role="img" aria-label="Antarctica">🇦🇶 Antarctica</span> 
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/FLK">
    //               <span role="img" aria-label="Falkland Islands"> 🇫🇰 Falkland Islands</span>
    //               </a>
    //               <a class="list-group-item list-group-item-action active" href="/FRA">
    //               <span role="img" aria-label=" France"> 🇫🇷 France</span>
    //               </a>
    //               <a class="list-group-item list-group-item-action" href="/ZWE">
    //               <span role="img" aria-label=" Zimbabwe"> 🇿🇼 Zimbabwe</span> 
    //               </a>
    //             </div></span>
    //           </div>
    //           <div class="col-7">
    //             <h1>France</h1>
    //             <table class="table">
    //               <thead />
    //               <tbody>
    //                 <tr>
    //                   <td style={{width: "30%",}}>Capital</td>
    //                   <td>Paris</td>
    //                 </tr>
    //                 <tr>
    //                   <td>Area</td>
    //                   <td>
    //                     551695 km
    //                     <sup>2</sup>
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <td>Borders</td>
    //                   <td>
    //                     <ul>
    //                       <li>
    //                         <a href="/AND">Andorra</a>
    //                       </li>
    //                       <li>
    //                         <a href="/BEL">Belgium</a>
    //                       </li>
    //                       <li>
    //                         <a href="/DEU">Germany</a>
    //                       </li>
    //                       <li>
    //                         <a href="/ITA">Italy</a>
    //                       </li>
    //                       <li>
    //                         <a href="/LUX">Luxembourg</a>
    //                       </li>
    //                       <li>
    //                         <a href="/MCO">Monaco</a>
    //                       </li>
    //                       <li>
    //                         <a href="/ESP">Spain</a>
    //                       </li>
    //                       <li>
    //                         <a href="/CHE">Switzerland</a>
    //                       </li>
    //                     </ul>
    //                   </td>
    //                 </tr>
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
//     );
//   }
// }

export default CountryDetail;
