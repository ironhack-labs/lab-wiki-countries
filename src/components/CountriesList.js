import React,  { useState } from "react";
import data from "../countries.json"
import CountryBox from "../components/CountryBox"



function CountriesList (){

    const [country, setCountry]  = useState(data)


    return(
        <div>
        <h1>Hola, furula</h1>            
                <div className="container">                   
                    <div className="row">                   
                        <div className="col-5" >
                            <div className="list-group">
                            {country.map(oneCountry=>
                                <CountryBox
                                key={oneCountry.cca3}
                                id={oneCountry.cca3}
                                name={oneCountry.name.common}
                                image={oneCountry.flag}                                
                                />
                            )}                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
                      



    )
}


export default CountriesList