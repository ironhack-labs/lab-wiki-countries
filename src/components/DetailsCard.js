import React from 'react';
import styled from 'styled-components';

const DetailsCard = ({match, countries}) => {
    const { params } = match;
    const [country] = countries.filter((el) => {
        return el.cca3 === params.id;
    });
    const borderCountryIds = country.borders;
    const borderCountries = [];

    const getCountryName = (countryId) => {
        const [countryName] = countries.filter((el) => {
        return el.cca3 === countryId;
        });
        return countryName.name.common;
    };
    const countryName = getCountryName(params.id);
    const getBorderCountryNames = (borders) => {
        country.borders.forEach((border) => {
            borderCountries.push(getCountryName(border));
        });
    };

    getBorderCountryNames(borderCountryIds);
    
    return (
      <StyledCard>
        <h1>{countryName}</h1>
        <p>Capital : {country.capital[0]}</p>
        <p>Area : {country.area}</p>
        {borderCountryIds.length > 0
          ? `Borders : `
          : `${countryName} is landlocked`}
        <ul>
          {borderCountryIds.length > 0 &&
            borderCountries.map((country, i) => <li key={i}>{country}</li>)}
        </ul>
      </StyledCard>
    );
}
 
const StyledCard = styled.article`
  margin-top: 2rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-left: 5rem;
  > h1 {
    font-size: 3rem;
    margin-bottom: 0;
    border-bottom: 1px lightgray solid;
    width: 100%;
  }
  > p {
    font-size: 1.25rem;
    border-bottom: 1px lightgray solid;
    width: 100%;
  }
`;

export default DetailsCard;