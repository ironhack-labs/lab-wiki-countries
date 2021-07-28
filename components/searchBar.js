import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';
import { useParams } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

function Searchbar(props){
        const [formState, setFormState] = useState("");
        const {searchHandler} = props;

        function handleChanger(event){
            const search = event.target.value;
            console.log("in search :", search);

            setFormState(search);
            searchHandler(search);
        }

        return (
            <form onSubmit={handlerSearch} class="col-12 col-lg-auto mb-3 mb-lg-0">
                <input name="search" value={formState} onChange={handleChanger} class="form-control" type="text" placeholder="Search..."/>
            </form>
        )
}

export default Searchbar