import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Typography } from 'antd'


function CountryDetails() {
const [details, setDetails] = useState({})
const {name} = useParams()

async function getDetails() {
  const {data} = await axios.get(`https://restcountries.com/v2/name/${name}`
  );
  setDetails(data[0])
}

  useEffect(() => {
    getDetails() 
  }, [name])
  

  return (
    <div>
    <img src={details.flag} alt={details.name} style={{ width: 400 }} />
    <h1 style={{ textAlign: 'center' }}>
      {details.name ? details.name : 'Loading...'}
    </h1>
    <h3 style={{ textAlign: 'center' }}>Area: {details.area} </h3>
    <h3 style={{ textAlign: 'center' }}>Population: {details.population} </h3>
  </div>
  )
}

export default CountryDetails