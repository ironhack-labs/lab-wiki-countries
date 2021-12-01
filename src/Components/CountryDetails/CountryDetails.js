import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';


function CountryDetails(props) {
  const [messege, setMessege] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [country, setCountry] = useState({})
  //Some times the API doesnt return Borders in Data , the following is to handle that:
  const [hasBorders, setHasBorders] = useState(false);



  const params = useParams();
  useEffect(() => {
    setMessege('Loading from API ...')
    console.log(params.code)
    //Calling API
    axios({
      method: 'get',
      url: `https://restcountries.com/v2/alpha/${params.code}`,

    }).then(data => {
      console.log("Single country got in details: ", data.data)
      setCountry({ ...data.data })
      setMessege('');
      setLoaded(true)
      setHasBorders(!!data.data.borders)
    })
      .catch(err => {
        setMessege(`Some thing happend on Calling API Error object : ${err}`)
        setLoaded(false)
      })
  }, [params])
  return (
    <div className="col-7" >
      {messege}
      <h1>{country['name']}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country['capital']}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country['area']} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="borderList">

                {loaded && hasBorders && country?.borders?.map(neigbore => {
                  console.log(neigbore)
                  return <li key={neigbore}><Link to={`/${neigbore}`}>{neigbore}</Link></li>
                })}
                {!hasBorders && <p>The Api didnt return the borders property in Data. refresh or try other country</p>}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails
