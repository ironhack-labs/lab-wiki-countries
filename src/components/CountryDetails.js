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

    //PURPOSE is to have the link update superfast (reactive!) 🏎 ...without needing to do a refresh page
    async componentDidUpdate(prevProps){
        // 🚨 We can do the setState() immediately in componentDidUpdate(), but MUST wrap in IF-statement to prevent infinite loop
        const alpha3Code = this.props.match.params.id
        const element = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
        if (this.props !== prevProps){
            this.setState({
                capital: element.data.capital,
                area: element.data.area,
                borders: element.data.borders,
                name: element.data.name,
                flag: element.data.flag,
            })
            console.log("try")
        }
        console.log("component did update")
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