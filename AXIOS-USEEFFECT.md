
Having the project finding logic within the useEffect allows you to easily substitute the above logic to get the data from the server instead of getting it from a static array. Example

// ...
  const { alpha3Code} = useParams();
  console.log('alpha3Code', alpha3Code);  
 
  useEffect(() => {
    // Get the project by id from the server
    axios.get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((response) => {
        setFoundCountry(response.data);
      })
    
  }, [alpha3Code]);
 
// ...