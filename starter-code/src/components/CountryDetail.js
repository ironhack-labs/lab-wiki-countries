import React from 'react';

const CountryDetail = (props) =>  {

    return(
        <div>
        <h1>{props.name}</h1>
        <p> Capital  {props.capital}</p>
        <p> Area {props.area}</p>
        <p> Borders </p>
        </div>
    );
}



export default CountryDetail;