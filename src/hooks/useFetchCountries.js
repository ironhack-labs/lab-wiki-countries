import { useEffect, useState } from "react";
import { getCountries, getCountry } from "../helpers/getCountries";


export const useFetchCountries = () =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });
        
    useEffect( () =>{
        getCountries()
          .then( (countries)=>{
            setState({
                data: countries,
                loading:false
            })
          })
      },[]);

    return state;

}

export const useFetchCountry = (code) =>{
  const [state, setState] = useState({
      data: {},
      loading: true
  });
      
  useEffect( () =>{
    getCountry(code)
        .then( (country)=>{
          setState({
              data: country,
              loading:false
          })
        })
    },[]);

  return state;

}