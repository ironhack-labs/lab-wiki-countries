import React from "react";
import axios from "axios";

//We install an library Axios 💾 to help us call APIs... Axios main strenght is the API sends directly to the frontend 💪
//Remember, we still need to use async await with axios 

class CountryDetails extends React.Component {
    state = {
        name: "",
        capital: "",
        area: "",
        borders: "",
        flag: "",
    };

    //compontentDidMount is ALLWAYS where we call APIs
    async componentDidMount() {
        
        const alpha3Code = this.props.match.params.id;
        const element = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
        );
        
        this.setState({
          name: element.data.name,
          capital: element.data.capital,
          area: element.data.area,
          borders: element.data.borders,
          flag: element.data.flag,
        });

    }

    componentDidUpdate(prevState, prevProps) {
        //To prevent an infinite loo
        if (prevProps !== this.props) {
          //Get details form api (againi)
        }
      }

    render() {
        console.log("IN render");
        const { name, capital, area, borders, flag } = this.state;
        return (
        <div>
            <h3>{name}</h3>
            <h4>{capital}</h4>
            <p>{area}</p>
            <p>{borders}</p>
            <img className="flag" src={flag} alt="placeholder" />
        </div>
        );
    }

};

export default CountryDetails;