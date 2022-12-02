import React from 'react'

function CountriesList(props) {

    return (
        <>

        {props.countries.map((country) =>  { 
            return (
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action" href={country.alpha3Code} >
                      {/* {country.alpha3Code} */} {country.name.common}
                    </a>

                </div>
            </div>

            )

        })}

        </>
    )
}

export default CountriesList
