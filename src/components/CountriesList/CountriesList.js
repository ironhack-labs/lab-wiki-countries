import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList ({data}) {
console.log("props de countrieslist", data)
    return (
        <div>
            <h1>Countries List</h1>
            <div className="row">
                <div className="col-5" >
                    <div className="list-group">
                        <ul>
                            {
                                data.map((item)=>{
                                    return <Link to={item.cca3}>
                                                <li className="list-group-item list-group-item-action"> {item.name.official}</li>
                                            </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList


//style="max-height: 90vh; overflow: scroll"