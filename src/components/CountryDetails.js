import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const CountryDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
console.log(details)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return (
    <div>
      <h1>Country Details{}</h1>
    </div>
  );
};
