import React, { Component } from 'react';


import ListGroup from "react-bootstrap/ListGroup";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const country = this.props.country;
        return(
            <ListGroup.Item action variant="light" href={country.cca3}>
                <img
                    className="Flag"
                    src={`https://www.countryflags.io/${country.cca3}/flat/64.png`}
                    alt=""
                />
                {country.name.official}
            </ListGroup.Item>
        );
    }
}

export default Dashboard;
