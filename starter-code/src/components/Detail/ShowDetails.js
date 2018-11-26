import React, {Component} from 'react';
import countries from '../../countries'
import Countries from "../Home/Countries";
import Detail from "./Detail";

class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {countries}
    }



    render() {
        console.log(this.props.match.params);
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <h2 className="navbar-brand">WikiCountries</h2>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <Countries countries={this.state.countries}/>
                        </div>
                        <div className="col-7">
                            <Detail id={this.props.match.params.id} countries={this.state.countries}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


 export default ShowDetails




