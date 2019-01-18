import React from "react";
import { ListItem } from "./ListItem";

export const CountryList = ({ country }) => {
  return (
      <div className="col-5">
        <div className="list-group countrylist">
         {country.map((e,i)=><ListItem key={i} data={e}></ListItem>)}
        </div>
      </div>
  
  );
};
