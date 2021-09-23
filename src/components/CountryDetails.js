    //import state and effect
    import { useState, useEffect } from 'react';
    //router link
    import { Link } from 'react-router-dom';
    
    function CountryDetails(props) {
        const [ countryData, setCountryData ] = useState({
            name: '',
            capital: '',
            area: '',
            flag: '',
            borders: []
        });
    
        // This effect depends on `props.countries`.
        // It will run on initial render and every time
        // when the `props.countries` gets updated.
        useEffect(
            () => {
                const foundCountry = props.countryData.find((country) => {
                    return country.alpha3Code === props.match.params.alpha3Code;
                });
    
                //Le digo que el alpha2Code sea el "flag" de countires ya que countries.flag da errores
                //luego encadeno la string de countryflags con el alpha2code [linia 50]
                if (foundCountry) {
                    const { name, capital, area, alpha2Code, borders } = foundCountry;
                    setCountryData({
                        name: name,
                        capital: capital,
                        area: area,
                        flag: alpha2Code,
                        borders: [ ...borders ]
                    });
                }
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [ props.countryData, props.match.params.alpha3Code ]
            //https://stackoverflow.com/questions/60988371/react-hook-useeffect-has-a-missing-dependency-props-match-params-id
        );
    
        //console.log(countryData.borders);
    
        //Esto me sobraría y tendría que usar countries se supone | Añadido al useEffects iteración #4
        // const foundCountry = props.countries.find((country) => {
        // 	return country.alpha3Code === props.match.params.alpha3Code;
        // });
    
        function getBordersName(alpha3Code) {
            const foundCountry = props.countryData.find((country) => country.alpha3Code === alpha3Code);
            return foundCountry ? foundCountry.name : '';
        }
    
        //if we use country.flag, some of them are broken
        //https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png <- Shiny instead of flat better
        //http://www.geognos.com/api/en/countries/flag/GR.png <- Not larger flags, but tried this one
        return (
            <div class="col-7">
            
                <img
                    src={'https://www.countryflags.io/' + countryData.flag + '/flat/64.png'}
                    alt="country flag"
                    className="countryDetailsImg"
                />
                <h1>{countryData.name}</h1>
                <table class="table">
                    <thead />
                    <tbody>
                        <tr>
                            <td className="countryDetailTd">Capital</td>
                            <td>{countryData.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countryData.area} km <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                  
                                    {countryData.borders.map((border) => {
                                        return (
                                            <li key={border}>
                                                <Link to={'/' + border}>
                                                    <span className="linkACursor">{getBordersName(border)}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    export default CountryDetails;