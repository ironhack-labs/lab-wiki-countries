import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


function CountryDetails() {

  const {countryId} = useParams()
  const urlCountry = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
  const redirect = useNavigate()
  const [country, setCountry] = useState(null)
  const [limits, setLimits] = useState(null)
  let border = []
  
  const getData = async ()=>{
    try {
      let data = await axios.get(urlCountry)
      data = await data.data
      setCountry(data)
      border = data.borders
      // console.log(data.borders)
      let bordersName = []
      for (let limit of border){
        let borderName = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${limit}`)
        borderName = await borderName.data
        bordersName.push(borderName)
        }
        setLimits(bordersName)
        // console.log(bordersName)
    }
    catch (error) {
      // console.log(error)
      redirect('/')
    }
  }

  useEffect(()=>{
    getData()
    return ()=>{setCountry(null); setLimits(null)}
  }, [countryId])


  if (country === null || limits === null){
    return <h1>...Descargando el pais</h1>
  }
	return (
		<>
    <div>
   		{/* Bootstrap container wrapper div  */}
      <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width:"30%"}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {limits.map((elem)=>{
                    return(
                    <Link key={elem.alpha3Code} to={`/${elem.alpha3Code}`}><li>{elem.name.common}</li></Link>
                    )
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
	)
}

export default CountryDetails;
