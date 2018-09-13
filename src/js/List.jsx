import React from "react";
import { Link } from "react-router-dom"

const List = props => {
  const aList = props.countries
  .filter(el => el.name.common.toLowerCase().includes(props.search.toLowerCase()))
  .map((el, index) => {
    return (
      <Link key={"country_" + index} to={`/${el.cca3}`} className="clickable list-group-item list-group-item-action">
        {el.flag} {el.name.common}
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
