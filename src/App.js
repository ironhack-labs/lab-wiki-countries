import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import NavBar from './components/NavBar'
import data from './countries.json'

const App = () => {
  return (
    <>
      <NavBar />
      <Body>
        <CountriesList countries={data} />
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countriesList={data} />} />
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
