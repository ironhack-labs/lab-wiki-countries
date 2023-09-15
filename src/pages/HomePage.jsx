import { useState, useEffect } from "react";
import axios from "axios";
import {  Link, NavLink, Route, Routes } from "react-router-dom";


function HomePage() {

    const baseURL = "https://ih-countries-api.herokuapp.com"

    const [countries, setCountries] = useState({})

    useEffect(() => {
        axios.get(baseURL + '/countries')
            .then(response => {
                setCountries(response.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

    const renderList = () => {
        if (countries === null) {
            return <p>loading....</p>
        }

    }

    return (
        <>
            <div >
                <h1>WikiCountries: Your Guide to the World</h1>
                <div>{renderList()}</div>
            </div>
        </>
    )
}

export default HomePage;