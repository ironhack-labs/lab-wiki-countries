import React from "react";
import { Link } from "react-router-dom"

const List = props => {
  const aList = props.countries.map((el, index) => {
    return (
      <Link key={"country_" + index} to={`/${el.cca3}`} className="list-group-item list-group-item-action">
        {el.name.common}
      </Link>
    );
  });

  return (
    <div>
      <div data-spy="scroll" className="list-group scrollspy-example">{aList}</div>
    </div>
  );
};

export default List;
