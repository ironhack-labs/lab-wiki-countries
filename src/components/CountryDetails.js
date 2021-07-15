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
        
        let borderArray = [];
        if(response.data.borders){
            for (let i = 0; i < response.data.borders.length; i++) {
                let countryFound = await axios.get(`https://restcountries.eu/rest/v2/alpha/${response.data.borders[i]}`);
                borderArray.push(countryFound.data);
                console.log('BORDER ARRAY', countryFound.data)
            }
        }
        


        console.log(response);

        this.setState({
            name: response.data.name,
            capital: response.data.capital,
            area: response.data.area,
            borders: borderArray
        })
    }



    async componentDidUpdate(prevProps) {
        const countryId = this.props.match.params.id;
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`);


        let borderArray = [];
        if (response.data.borders) {
            for (let i = 0; i < response.data.borders.length; i++) {
                console.log('DATA BORDERSSSSSSSS',response.data.borders)
                let countryFound = await axios.get(`https://restcountries.eu/rest/v2/alpha/${response.data.borders[i]}`);
                console.log('RESPONSE DATA BORDERSSSS', response.data.borders[i])
                borderArray.push(countryFound.data);
                console.log('COUNTRY FOUND!!!!!', countryFound.data)
            }
        }



        //If you set the state inside component didUpdate you are going
        //to end in an infinite loop
        if (this.props !== prevProps) {
            this.setState({
                name: response.data.name,
                capital: response.data.capital,
                area: response.data.area,
                borders: borderArray
            })
            
        }
        console.log('component did update')
    }



    render() {
        console.log('In render');
        const { name, capital, area, borders } = this.state;
        return (
            <>
                <h1>{name}</h1>
                <h4>{capital}</h4>
                <p>{area} km</p>
                <ul>{borders.map((border) => {
                    return (
                      <li>
                            <NavLink key={border.alpha3Code} to={`/countries/${border.alpha3Code}`}>{border.name}</NavLink>

                      </li>   
                   )
                })}</ul>
            </>
        )
    }
}





 export default CountryDetails




