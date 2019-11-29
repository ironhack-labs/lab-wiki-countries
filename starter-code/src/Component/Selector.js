import React from "react";
import { Link } from "react-router-dom";
import Countries from "../countries.json";
import Emoji from "./Emoji";

const Selector = () => {
  let countrySelector = Countries.map((el, index) => {
    return (
      <Link
        key={index}
        to={`/${el.cca3}`}
        className="list-group-item list-group-item-action"
      >
        {" "}
        <Emoji symbol={el.flag} />
        {el.name.common}
      </Link>
    );
  });
  return countrySelector;
};

export default Selector;
