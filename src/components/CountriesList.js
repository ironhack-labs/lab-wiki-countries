import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class CountriesList extends Component {

    // create the countries state
    state = {
        countries: []
    }

    async componentDidMount() {
        // use axios to call a get request
        let response = await axios.get('https://restcountries.eu/rest/v2/all')
        // remember to use .data
        console.log(response.data)
        // update the state created above
        this.setState({
            countries: response.data
        })
    }

    render() {
        // loading message
        if (this.state.countries.length === 0) {
            // remember to return in an if statement
            return <p>Loading. . .</p>
        }

        return (
                <div className="col-5">
                    <Card  variant="outlined">
                        <CardContent>
                    
                        {
                            
                            // map to return all the available countries
                            this.state.countries.map((country, i) => {
                                // use template literals in the link url to handle the index
                                return <p key={i} className="list-group-item list-group-item-action">
                                    <img src={country.flag} alt="flag" style={{width: '30px'}}/> 
                                    <CardActions>    
                                    <Button size="small" color="primary">
                                    <Link to={`/country/${country.alpha3Code}`}>{country.name}</Link> 
                                    </Button> </CardActions></p>
                    
                            })
                        
                        }
                        </CardContent>
                        
                        </Card>
                </div>
        )
    }
}


export default CountriesList;