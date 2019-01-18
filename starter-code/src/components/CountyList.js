import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Div = styled.div`
  max-height: 90vh;
  overflow: scroll;
`;

export const CountyList = ({ countryData }) => {
  return (
    <Div className="col-5">
      <div className="list-group">
        {countryData.map(country => (
          <NavLink
            key={country.name.official}
            className="list-group-item list-group-item-action"
            to={"/" + country.cca3}
          >
            <span>{country.flag}</span>
            {country.name.official}
          </NavLink>
        ))}
      </div>
    </Div>
  );
};
