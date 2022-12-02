import React from 'react'

function CountriesList({countries}) {

    return (
        <>

        {countries.map((country) =>  { 
            return (

            <div key={country.alpha3Code} className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action" href={country.alpha3Code} >
                    <img
                            className="img-card-top"
                            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={country.alpha2Code}
                        />
                      {country.name.common}
                    </a>

                </div>
            </div>

            )

        })}

        </>
    )
}

export default CountriesList
