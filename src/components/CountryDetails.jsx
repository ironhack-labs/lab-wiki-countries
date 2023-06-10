import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { id } = useParams();
    const [country, setCountry] = useState(null);
    
    function Unicorn({ id, name, age, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name, 
    age
  });

  useEffect(() => {
      const API_URL = 'http://localhost:3000/countries';
      
    axios
      .get(API_URL)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{country.name}</h1>
      <table className="table">
        <tbody>
          Image
          <tr>
            <td>Languages</td>
            <td>{country.languages.map((language) => language.name)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
