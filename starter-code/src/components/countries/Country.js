import React from "react"
import {Link} from "react-router-dom"


const Country = ({name, flag}) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20vw",
    height: "20vh",
    border: "1px solid black",
    borderRadius: "20px",
    margin: "10px",
  }}>
    <h3>{name.common}</h3>
    <p>{flag}</p>
    <Link to={`/country-list/${name.common}`}>
      <button>Info</button>
    </Link>
  </div>
)

export default Country