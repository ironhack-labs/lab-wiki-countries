import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class CountryDetails extends React.Component {

    state = {
        name: '',
        capital: '',
        area: '',
        borders: [],
    }

    async componentDidMount() {

        const countryId = this.props.match.params.id;
        console.log('Project id that comes from the URL', countryId);



        //Finding the project on the projectsJSON based on the id
        //that comes from the URL
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`);
        


        console.log(response);

        this.setState({
            name: response.data.name,
            capital: response.data.capital,
            area: response.data.area,
            borders: response.data.borders
        })
    }



    async componentDidUpdate(prevProps) {
        const countryId = this.props.match.params.id;
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`);

        //If you set the state inside component didUpdate you are going
        //to end in an infinite loop
        if (this.props !== prevProps) {
            this.setState({
                name: response.data.name,
                capital: response.data.capital,
                area: response.data.area,
                borders: response.data.borders
            })
            
        }
        console.log('component did update')
    }



    render() {
        console.log('In render');
        const { name, capital, area, borders } = this.state;
        return (
            <>
                <h3>{name}</h3>
                <h4>{capital}</h4>
                <p>{area} km</p>
                <ul>{borders.map((border, index) => {
                    return (
                      <li>
                            <NavLink key={index} to={`/countries/${border}`}>{border}</NavLink>

                      </li>   
                   )
                })}</ul>
            </>
        )
    }
}





 export default CountryDetails




