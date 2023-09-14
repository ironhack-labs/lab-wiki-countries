import { Link } from "react-router-dom";
import React from "react";
function HomePage(props) {
     
    return(
        props.countryList.map((e,index)=>{
            return(
                <div key={index}>

                </div>
            )
        })
    )




    return (

        <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>


        </div>

    );

}

export default HomePage;
