import React from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom"


class CountriesList extends React.Component{
    state ={
        countries:[]
    }

    //https://restcountries.eu/rest/v2/all
    //Sempre chamar a API no componentDidMount()

    async componentDidMount(){
        //1. Make the call to the API
        //2. Wait for the response from the API
        //3. Set the state with the response
        const response = await axios.get("https://restcountries.eu/rest/v2/all")
        console.log(response.data)
        this.setState({
            countries:response.data
        })
    }


/* Criar uma condicional pra passar uma mensagem enquanto a tela carrega */
        render() {
            const { countries } = this.state;
            return (
              <>
                {/* /* Criar uma condicional pra passar uma mensagem enquanto a tela carrega */}
                  {countries && countries.length ? (
                    this.state.countries.map((country) => {
                      return (
                          <>
                          <div className="new-card" key={country.alpha3Code}>
                          <NavLink activeStyle={{color:"red"}} to={`/countryDetails/${country.alpha3Code}`}><img width="80px" height="60px" src={country.flag} alt=""/> {country.name}</NavLink>
                          </div>
                          
                          </>
                      )
                    })
                  ) : (
                    <p>Loading...</p>
                  )}
              </>
            );
          }
        }

export default CountriesList