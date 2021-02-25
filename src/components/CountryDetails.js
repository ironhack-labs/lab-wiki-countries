import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    const { params } = props.match;
    const country = props.countryChangeHandler(params.code);
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {!country.borders.length ? <p>Border with no country</p> : country.borders.map(code => {
                    return(
                        <li key={code}>
                            <Link to={`/${code}`}>{props.countryChangeHandler(code).name.official}</Link>
                        </li>
                    )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;


// {
//     "name": {
//         "common": "Afghanistan",
//         "official": "Islamic Republic of Afghanistan",
//         "native": {
//             "prs": {
//                 "official": "\u062c\u0645\u0647\u0648\u0631\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
//                 "common": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
//             },
//             "pus": {
//                 "official": "\u062f \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646 \u0627\u0633\u0644\u0627\u0645\u064a \u062c\u0645\u0647\u0648\u0631\u06cc\u062a",
//                 "common": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
//             },
//             "tuk": {
//                 "official": "Owganystan Yslam Respublikasy",
//                 "common": "Owganystan"
//             }
//         }
//     },
//     "tld": [".af"],
//     "cca2": "AF",
//     "ccn3": "004",
//     "cca3": "AFG",
//     "cioc": "AFG",
//     "independent": true,
//     "status": "officially-assigned",
//     "currency": ["AFN"],
//     "callingCode": ["93"],
//     "capital": ["Kabul"],
//     "altSpellings": ["AF", "Af\u0121\u0101nist\u0101n"],
//     "region": "Asia",
//     "subregion": "Southern Asia",
//     "languages": {
//         "prs": "Dari",
//         "pus": "Pashto",
//         "tuk": "Turkmen"
//     },
//     "translations": {
//         "ces": {"official": "Afgh\u00e1nsk\u00e1 isl\u00e1msk\u00e1 republika", "common": "Afgh\u00e1nist\u00e1n"},
//         "cym": {"official": "Gweriniaeth Islamaidd Affganistan", "common": "Affganistan"},
//         "deu": {"official": "Islamische Republik Afghanistan", "common": "Afghanistan"},
//         "fra": {"official": "R\u00e9publique islamique d'Afghanistan", "common": "Afghanistan"},
//         "hrv": {"official": "Islamska Republika Afganistan", "common": "Afganistan"},
//         "ita": {"official": "Repubblica islamica dell'Afghanistan", "common": "Afghanistan"},
//         "jpn": {"official": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3\u00b7\u30a4\u30b9\u30e9\u30e0\u5171\u548c\u56fd", "common": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3"},
//         "nld": {"official": "Islamitische Republiek Afghanistan", "common": "Afghanistan"},
//         "por": {"official": "Rep\u00fablica Isl\u00e2mica do Afeganist\u00e3o", "common": "Afeganist\u00e3o"},
//         "rus": {"official": "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d", "common": "\u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d"},
//         "slk": {"official": "Afg\u00e1nsky islamsk\u00fd \u0161t\u00e1t", "common": "Afganistan"},
//         "spa": {"official": "Rep\u00fablica Isl\u00e1mica de Afganist\u00e1n", "common": "Afganist\u00e1n"},
//         "fin": {"official": "Afganistanin islamilainen tasavalta", "common": "Afganistan"},
//         "est": {"official": "Afganistani Islamivabariik", "common": "Afganistan"},
//         "zho": {"official": "\u963F\u5BCC\u6C57\u4F0A\u65AF\u5170\u5171\u548C\u56FD", "common": "\u963F\u5BCC\u6C57"},
//         "pol": {"official": "Islamska Republika Afganistanu", "common": "Afganistan"}
//     },
//     "latlng": [33, 65],
//     "demonym": "Afghan",
//     "landlocked": true,
//     "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
//     "area": 652230,
//     "flag": "\ud83c\udde6\ud83c\uddeb"
// },
