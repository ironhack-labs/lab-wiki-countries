import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import countryJSON from '../countries.json';

const CountryDetails = () => {
  const { id } = useParams();
  const [countryDeets, setCountryDeets] = useState({
    country: '',
    borders: [],
  });
  console.log('countryDeets', countryDeets);
  useEffect(() => {
    const countryParams = countryJSON.filter((el) => {
      return el.alpha2Code === id;
    });

    let borders = [];

    if (countryParams[0].borders.length > 0) {
      borders = countryParams[0].borders.map((code) => {
        const countryBorder = countryJSON.filter(
          (el) => el.alpha3Code === code
        );
        return countryBorder[0].name.common;
      });
    }

    setCountryDeets({ country: countryParams[0], borders });
  }, []);

  return (
    <div>
      <div>TEST</div>
    </div>
  );
};

export default CountryDetails;

// {
//     "name": {
//       "common": "France",
//       "official": "French Republic",
//       "native": {
//         "fra": {
//           "official": "R\u00e9publique fran\u00e7aise",
//           "common": "France"
//         }
//       }
//     },
//     "tld": [".fr"],
//     "alpha2Code": "FR",
//     "alpha3Code": "FRA",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//       "EUR": {
//         "name": "Euro",
//         "symbol": "\u20ac"
//       }
//     },
//     "idd": {
//       "root": "+3",
//       "suffixes": ["3"]
//     },
//     "capital": ["Paris"],
//     "altSpellings": ["FR", "French Republic", "R\u00e9publique fran\u00e7aise"],
//     "region": "Europe",
//     "subregion": "Western Europe",
//     "languages": {
//       "fra": "French"
//     },
//     "translations": {
//       "ces": {
//         "official": "Francouzsk\u00e1 republika",
//         "common": "Francie"
//       },
//       "deu": {
//         "official": "Franz\u00f6sische Republik",
//         "common": "Frankreich"
//       },
//       "est": {
//         "official": "Prantsuse Vabariik",
//         "common": "Prantsusmaa"
//       },
//       "fin": {
//         "official": "Ranskan tasavalta",
//         "common": "Ranska"
//       },
//       "fra": {
//         "official": "R\u00e9publique fran\u00e7aise",
//         "common": "France"
//       },
//       "hrv": {
//         "official": "Francuska Republika",
//         "common": "Francuska"
//       },
//       "hun": {
//         "official": "Francia K\u00f6zt\u00e1rsas\u00e1g",
//         "common": "Franciaorsz\u00e1g"
//       },
//       "ita": {
//         "official": "Repubblica francese",
//         "common": "Francia"
//       },
//       "jpn": {
//         "official": "\u30d5\u30e9\u30f3\u30b9\u5171\u548c\u56fd",
//         "common": "\u30d5\u30e9\u30f3\u30b9"
//       },
//       "kor": {
//         "official": "\ud504\ub791\uc2a4 \uacf5\ud654\uad6d",
//         "common": "\ud504\ub791\uc2a4"
//       },
//       "nld": {
//         "official": "Franse Republiek",
//         "common": "Frankrijk"
//       },
//       "per": {
//         "official": "\u062c\u0645\u0647\u0648\u0631\u06cc \u0641\u0631\u0627\u0646\u0633\u0647",
//         "common": "\u0641\u0631\u0627\u0646\u0633\u0647"
//       },
//       "pol": {
//         "official": "Republika Francuska",
//         "common": "Francja"
//       },
//       "por": {
//         "official": "Rep\u00fablica Francesa",
//         "common": "Fran\u00e7a"
//       },
//       "rus": {
//         "official": "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
//         "common": "\u0424\u0440\u0430\u043d\u0446\u0438\u044f"
//       },
//       "slk": {
//         "official": "Franc\u00fazska republika",
//         "common": "Franc\u00fazsko"
//       },
//       "spa": {
//         "official": "Rep\u00fablica franc\u00e9s",
//         "common": "Francia"
//       },
//       "swe": {
//         "official": "Republiken Frankrike",
//         "common": "Frankrike"
//       },
//       "urd": {
//         "official": "\u062c\u0645\u06c1\u0648\u0631\u06cc\u06c1 \u0641\u0631\u0627\u0646\u0633",
//         "common": "\u0641\u0631\u0627\u0646\u0633"
//       },
//       "zho": {
//         "official": "\u6cd5\u5170\u897f\u5171\u548c\u56fd",
//         "common": "\u6cd5\u56fd"
//       }
//     },
//     "latlng": [46, 2],
//     "landlocked": false,
//     "borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
//     "area": 551695,
//     "demonyms": {
//       "eng": {
//         "f": "French",
//         "m": "French"
//       },
//       "fra": {
//         "f": "Fran\u00e7aise",
//         "m": "Fran\u00e7ais"
//       }
//     }
//   },
//   {
//     "name": {
//       "common": "Faroe Islands",
//       "official": "Faroe Islands",
//       "native": {
//         "dan": {
//           "official": "F\u00e6r\u00f8erne",
//           "common": "F\u00e6r\u00f8erne"
//         },
//         "fao": {
//           "official": "F\u00f8royar",
//           "common": "F\u00f8royar"
//         }
//       }
//     },
//     "tld": [".fo"],
//     "alpha2Code": "FO",
//     "alpha3Code": "FRO",
//     "independent": false,
//     "status": "officially-assigned",
//     "unMember": false,
//     "currencies": {
//       "DKK": {
//         "name": "Danish krone",
//         "symbol": "kr"
//       },
//       "FOK": {
//         "name": "Faroese kr\u00f3na",
//         "symbol": "kr"
//       }
//     },
//     "idd": {
//       "root": "+2",
//       "suffixes": ["98"]
//     },
//     "capital": ["T\u00f3rshavn"],
//     "altSpellings": ["FO", "F\u00f8royar", "F\u00e6r\u00f8erne"],
//     "region": "Europe",
//     "subregion": "Northern Europe",
//     "languages": {
//       "dan": "Danish",
//       "fao": "Faroese"
//     },
//     "translations": {
//       "ces": {
//         "official": "Faersk\u00e9 ostrovy",
//         "common": "Faersk\u00e9 ostrovy"
//       },
//       "deu": {
//         "official": "F\u00e4r\u00f6er",
//         "common": "F\u00e4r\u00f6er-Inseln"
//       },
//       "est": {
//         "official": "F\u00e4\u00e4ri saared",
//         "common": "F\u00e4\u00e4ri saared"
//       },
//       "fin": {
//         "official": "F\u00e4rsaaret",
//         "common": "F\u00e4rsaaret"
//       },
//       "fra": {
//         "official": "\u00celes F\u00e9ro\u00e9",
//         "common": "\u00celes F\u00e9ro\u00e9"
//       },
//       "hrv": {
//         "official": "Farski Otoci",
//         "common": "Farski Otoci"
//       },
//       "hun": {
//         "official": "Fer\u00f6er",
//         "common": "Fer\u00f6er"
//       },
//       "ita": {
//         "official": "Isole Faroe",
//         "common": "Isole Far Oer"
//       },
//       "jpn": {
//         "official": "\u30d5\u30a7\u30ed\u30fc\u8af8\u5cf6",
//         "common": "\u30d5\u30a7\u30ed\u30fc\u8af8\u5cf6"
//       },
//       "kor": {
//         "official": "\ud398\ub85c \uc81c\ub3c4",
//         "common": "\ud398\ub85c \uc81c\ub3c4"
//       },
//       "nld": {
//         "official": "Faer\u00f6er",
//         "common": "Faer\u00f6er"
//       },
//       "per": {
//         "official": "\u062c\u0632\u0627\u06cc\u0631 \u0641\u0627\u0631\u0648\u0626\u0647",
//         "common": "\u062c\u0632\u0627\u06cc\u0631 \u0641\u0627\u0631\u0648\u0626\u0647"
//       },
//       "pol": {
//         "official": "Wyspy Owcze",
//         "common": "Wyspy Owcze"
//       },
//       "por": {
//         "official": "Ilhas Faroe",
//         "common": "Ilhas Faro\u00e9"
//       },
//       "rus": {
//         "official": "\u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
//         "common": "\u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430"
//       },
//       "slk": {
//         "official": "Faersk\u00e9 ostrovy",
//         "common": "Faersk\u00e9 ostrovy"
//       },
//       "spa": {
//         "official": "Islas Feroe",
//         "common": "Islas Faroe"
//       },
//       "swe": {
//         "official": "F\u00e4r\u00f6arna",
//         "common": "F\u00e4r\u00f6arna"
//       },
//       "urd": {
//         "official": "\u062c\u0632\u0627\u0626\u0631 \u0641\u0627\u0631\u0648",
//         "common": "\u062c\u0632\u0627\u0626\u0631 \u0641\u0627\u0631\u0648"
//       },
//       "zho": {
//         "official": "\u6cd5\u7f57\u7fa4\u5c9b",
//         "common": "\u6cd5\u7f57\u7fa4\u5c9b"
//       }
//     },
//     "latlng": [62, -7],
//     "landlocked": false,
//     "borders": [],
//     "area": 1393,
//     "demonyms": {
//       "eng": {
//         "f": "Faroese",
//         "m": "Faroese"
//       },
//       "fra": {
//         "f": "F\u00e9ro\u00efenne",
//         "m": "F\u00e9ro\u00efen"
//       }
//     }
//   },
