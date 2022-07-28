import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CountriesList = ({ countries }) => {
  return (
    <Wrapper>
      <ListGroup>
        {countries.map((country) => (
          <TheLink to={`/${country.alpha3Code}`} key={country.alpha3Code}>
            <ListContainer>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              <p>{country.name.common}</p>
            </ListContainer>
          </TheLink>
        ))}
      </ListGroup>
    </Wrapper>
  )
}

export default CountriesList

const Wrapper = styled.div`
  max-width: 20%;
  height: 80vh;
  overflow: auto;
  border: 2px solid black;
`

const TheLink = styled(Link)`
  text-decoration: none;
`

const ListContainer = styled(ListGroup.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7rem;
  img {
    max-width: 50px;
  }
  img,
  p {
    margin: 0;
    align-self: center;
  }
`
