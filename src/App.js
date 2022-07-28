import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { getCountries } from './api/getCountries'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import NavBar from './components/NavBar'
//import data from './countries.json'

const App = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await getCountries()
      setCountries(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBar />
      <Body>
        <CountriesList countries={countries} isLoading={isLoading} />
        <Routes>
          <Route path="/:alpha3Code" element={countries && <CountryDetails countriesList={countries} />} />
        </Routes>
      </Body>
    </>
  )
}

export default App

const Body = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`
