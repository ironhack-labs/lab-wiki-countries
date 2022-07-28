import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const CountryDetails = ({ countriesList }) => {
  const { alpha3Code } = useParams()
  const [country, setCountry] = useState(findCountry(alpha3Code))

  function findCountry(code) {
    return countriesList.find((c) => c.alpha3Code === code)
  }

  useEffect(() => {
    setCountry(findCountry(alpha3Code))
  }, [alpha3Code])

  return (
    <Wrapper>
      <img
        src={`https://flagpedia.net/data/flags/w1160/${country?.alpha2Code?.toLowerCase()}.webp`}
        alt={country?.name?.common}
      />
      <h1>{country?.name?.common}</h1>
      <Table>
        <tbody>
          <Row>
            <Cell>
              <p>Capital</p>
            </Cell>
            <Cell>
              <p>{country?.capital}</p>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <p>Area</p>
            </Cell>
            <Cell>
              <p>{`${country?.area} `}&#13218;</p>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <p>Borders</p>
            </Cell>
            <Cell>
              {!country.borders[0] ? (
                <p>No borders</p>
              ) : (
                <BordersList>
                  {country?.borders.map((c, i) => (
                    <li key={i}>
                      <Link to={`/${findCountry(c).alpha3Code}`}>{findCountry(c).name.common}</Link>
                    </li>
                  ))}
                </BordersList>
              )}
            </Cell>
          </Row>
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default CountryDetails

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  img {
    width: 30%;
  }
`
const Table = styled.table`
  width: 80%;
`
const Row = styled.tr`
  border-bottom: 1px solid lightgray;
`
const Cell = styled.td`
  text-align: center;
  p {
    margin: 0.5rem 0;
  }
`
const BordersList = styled.ul`
  text-align: center;
  list-style: none;
`
