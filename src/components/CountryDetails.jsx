import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CountryDetails = ({ countriesList }) => {
  const { alpha3Code } = useParams()
  return (
    <Wrapper>
      <h1>Details</h1>
    </Wrapper>
  )
}

export default CountryDetails

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`
