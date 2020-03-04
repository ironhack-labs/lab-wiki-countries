import React from "react";

const ListCountries = props => {
  return (
    <div className="list-group">
      {props.countries.map((e, i) => {
        return (
          <a
            key={i}
            className="list-group-item list-group-item-action"
            href={i}
          >
            {e.flag} {e.name.official}
          </a>
        );
      })}
    </div>
  );
};

export default ListCountries;
