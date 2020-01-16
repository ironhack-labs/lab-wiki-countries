import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './CountryDetail.css';

export class CountryDetail extends Component {

    constructor(props){
        super(props);
        // we've received a getData function from which we can get the actual data to show
        this.cca3=this.props.match.params.cca3;
        console.log("Country detail cca3: '"+this.cca3+"'");
        // let country=null;
        // if(this.props.hasOwnProperty("getData")){
        //     country=this.props.getData(cca3);
        //     console.log("Country '"+cca3+"'",country);
        //     this.state={country:country};
        // }else
        //     console.error("No getData prop!");
    }

    render() {
        console.log("Rendering country details!");
        let cca3=this.props.match.params.cca3;
        let country=this.props.getData(cca3);
        let style={"text-align":"left"};
        return (
            <div>
                <div style={style}><h1>Country <b>{country.name.official}</b></h1></div>
                <table>
                    <tbody>
                        <tr>
                            <td align='right' valign='top'>Capital:  </td>
                            <td align='left'>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td align='right' valign='top'>Area:  </td>
                            <td align='left'>{country.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td align='right' valign='top'>Borders:  </td>
                            <td align='left'>
                                <ul>
                                    {country.borders.map((cca3,index)=>{
                                        return(<li><Link to={"/country/"+cca3} key={index}>{this.props.getName(cca3)}</Link></li>);}
                                    )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CountryDetail;
