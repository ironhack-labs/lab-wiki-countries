
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {}
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries/"
        );
        setData(response.data);
        console.log("data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">
          {data.map((country, index) => (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
              key={index}
              countryCode={country.alpha3Code}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
                style={{ width: "20px", marginRight: "10px" }}
              />
              {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    </>
  );


export default HomePage;