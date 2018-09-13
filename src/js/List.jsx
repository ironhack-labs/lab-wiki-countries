import React from "react";
import { Link } from "react-router-dom"

const List = props => {
  const aList = props.countries.map((el, index) => {
    return (
      <Link key={"country_" + index} to={`/${el.cca3}`} className="clickable list-group-item list-group-item-action">
        {el.name.common}
      </Link>
    );
  });

  return (
    <div>
      <div className="list-group scroll">{aList}</div>
    </div>
  );
};

export default List;
