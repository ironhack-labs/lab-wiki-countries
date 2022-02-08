import { Link, useParams } from 'react-router-dom';
import data from '../../countries.json'
import {useEffect, useState} from 'react';
import axios from 'axios';

const CountryDetails = (props) =>{
    const {id} = useParams();
    const [ theCountry, setCountry ] = useState({});
    const [ isLoader, setLoader ] = useState(true)
    useEffect(()=> {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then(res => { console.log("larespuesta2", res)
            setCountry(res.data)
            setLoader(false)
    })
        .catch(error => {console.log("el error", error)})
    }, [id])//vigila el qu cmabia constante
    
    console.log("the id", theCountry)

    // const theCountry = data.find((item) => item.alpha3Code === id)
    // console.log("country", theCountry)

    return(
        isLoader ?
        <div>
            <span>Estoy cargando...</span>
        </div>
        :

        <div class="col-7">
         <h1>{theCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{theCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {theCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                 {theCountry.borders.map((border, index) =>{
                     return(
                        <li key={index}>
                            <Link 
                            to={`/${border}`}>
                            {border}
                            </Link>
                        </li>
                     )
                 })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    );
};

export default CountryDetails;