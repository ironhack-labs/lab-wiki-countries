import React , { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css';


function SearchBar(props) {

    const [formState, setFormState] = useState("")
    const {searchHandler} = props


    function handleChange(event) {
        const search = event.target.value
        console.log("in search: ", search)

        setFormState(search);
        searchHandler(search)
    }

    function handleSearch(event) {
        event.preventDefault();
        searchHandler(formState)
    }

    return (
        <form onSubmit={handleSearch} class="col-12 col-lg-auto mb-3 mb-lg-0">
                <input name="search" value={formState} onChange={handleChange} class="form-control" type="text" placeholder="Search..."/>
        </form>
    )
}

export default SearchBar;