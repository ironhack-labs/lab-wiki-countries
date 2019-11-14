import React from 'react'
import Borders from './borders'

export default function Country(props) {

    let theCountry = props.list.find((each)=>{
        return each.cca3 == props.match.params.id;
    })


        return (
            <div className="right-side">
                <div className="country-name">
                    {theCountry.name.common}
                </div>
                <div className="capital right-box">
                <p>
                    Capital
                </p>
                <p className="right-info">
                    {theCountry.name.common}
                </p>
                </div>
                <div className="area right-box">
                <p>
                    Area
                </p>
                <p className="right-info">
                    {theCountry.area}
                </p>
                </div>
                <div className="borders right-box">
                <p className="correct-borders">
                    Borders
                </p>
                <p className="right-info">
                    <Borders theCountry = {theCountry} props = {props}/>
                </p>
                </div>
            </div>
        )
    
}
