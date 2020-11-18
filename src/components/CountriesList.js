import React, {useState} from "react";
import CountryLink from "./CountryLink";

function CountriesList(props){

const [state,setState] = useState(0);

const countriesSrc = props.src;

    return (
      <ul className="list-group">
        {countriesSrc.map((el) => {
          return (
            <CountryLink state={[state, setState]} key={el.cca3}>
              {el.cca3}
            </CountryLink>
          );
        })}
      </ul>
    );
}

export default CountriesList;