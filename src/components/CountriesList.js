import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import countriesFromJson from "../countries.json"

function CountriesList() {

    const [countriesArray, setCountriesArray] = useState(countriesFromJson);


    return (
        <>
            <div className="col-5" style={{maxHeight: 90 + 'vh', overflow: "scroll"}}>
                <div className="list-group">
                    
                    {countriesArray.map((country) => {
                        return(
                        <Link to={'/' + country.alpha3Code} className="list-group-item list-group-item-action">
                            <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} />
                  
                            <p>{country.name.common}</p>
                        </Link>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default CountriesList;
