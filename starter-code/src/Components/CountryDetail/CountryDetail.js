import React from 'react';




const CountryDetail = props => {
    console.log(props.match.params.id)
    return (
        <div>
            <h3>URL PARAMS:{props.match.params.id}</h3>

        </div>
    )
}


export default CountryDetail;
