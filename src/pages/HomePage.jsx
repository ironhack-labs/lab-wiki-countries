import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import CountriesList from "../components/CountriesList";

function HomePage(){

    
    
    return (
        <>
        <h1>WikiCountries: Your Guide to the World</h1>
        <CountriesList/>
        </>
    )
}

export default HomePage;
