import React from "react";
import { Link } from "react-router-dom";

const Borders = ({ borders }) => {
  const bList = borders.map((el, index) => {
    return (
     
        <li key={"border_" + index}>
          <Link to={`/${el.id}`}>{el.name}</Link>
        </li>

    );
  });
  return (
    <td>
      <ul>{bList}</ul>
    </td>
  );
};

export default Borders;
