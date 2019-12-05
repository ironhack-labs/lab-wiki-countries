import countryData from "./../countries";

const loadCountry = name => {
  return new Promise((resolve, reject) => {
    const data = countryData[name];
    resolve(data);
  });
};

export { loadCountry };

export default loadCountry;
