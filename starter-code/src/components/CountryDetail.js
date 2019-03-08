import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const countryDetail = props => {
    console.log(props);

    const getCountry = cca3 => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === cca3;
        };
        return countries.find(theCountry);
    };
    
    const {params} = props.match;
    const countryFound = getCountry(params.cca3);

    return(
       <div className="row">
  		    <div className="col-sm-12">
                    <h2>{countryFound.name.common}</h2>
                    <table className="table">
                        <thead />
                        <tbody>
                            <tr>
                                <td>Capital :</td>
                                <td>{countryFound.capital}</td>
                            </tr>
            
                            <tr>
                                <td>Area :</td>
                                <td>{`${countryFound.area} km`}<sup>2</sup></td>
                            </tr>

                            <tr>
                            <td>Borders :</td>
                            <td>
                                <ul>
                                {countryFound.borders.map((border, index)=>{
                                    
                                    console.log(border)
                                    
                                    return (

                                        <div key = {index}>

                                        <Link  to={`/countryList/${border}`}>
                                        <li className="list-group-item border border-0"> {`${border}`} </li>
                                        </Link>
                                       
                                        </div>    
                                    )

                                    
                                })}
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                    </table> 
            </div> 
        </div>
    ) 
};


export default countryDetail;






                
                          
         