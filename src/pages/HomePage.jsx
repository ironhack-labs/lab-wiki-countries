import { useEffect, useState } from 'react';
import { getCountries } from '../services/countryService';
import ListItem from '../components/ListItem/ListItem';
import { getAuthor, getMessage } from '../services/localService';

const HomePage = () => {
  const [countries, setCountries] = useState([])
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    getCountries()
      .then((countriesApi) => {
        setCountries(countriesApi)
      })
      .catch((err) => console.error(err))

    Promise.all([getAuthor(), getMessage()])
      .then(res => {
        const [resAuthor, resMessage] = res;

        setAuthor(resAuthor.author)
        setMessage(resMessage.message)
      })
  }, [])

  return (
    <div>
      <h1>Author: {author}</h1>
      <h1>Message: {message}</h1>
      <h1>Countries list</h1>
      <div className="container">
        {countries.map((country) => {
          return (
            <ListItem key={country.name.common} country={country} />
          )
        })}
      </div>

    </div>
  );
};

export default HomePage;
