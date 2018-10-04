import React, { Component } from 'react';
import './App.css';
import CountryDetail from "./Components/CountryDetail";
import countries from './countries.json'
import CountryDisplay from "./Components/CountryDisplay";
import Routes from './Routes';
import {NavLink, withRouter } from 'react-router-dom'



class App extends Component {
  state = {
    paises:countries
   /* paises:[
        {
            "name": {
                "common": "Aruba",
                "official": "Aruba",
                "native": {
                    "nld": {
                        "official": "Aruba",
                        "common": "Aruba"
                    },
                    "pap": {
                        "official": "Aruba",
                        "common": "Aruba"
                    }
                }
            },
            "tld": [".aw"],
            "cca2": "AW",
            "ccn3": "533",
            "cca3": "ABW",
            "cioc": "ARU",
            "independent": false,
            "status": "officially-assigned",
            "currency": ["AWG"],
            "callingCode": ["297"],
            "capital": ["Oranjestad"],
            "altSpellings": ["AW"],
            "region": "Americas",
            "subregion": "Caribbean",
            "languages": {
                "nld": "Dutch",
                "pap": "Papiamento"
            },
            "translations": {
                "ces": {"official": "Aruba", "common": "Aruba"},
                "deu": {"official": "Aruba", "common": "Aruba"},
                "fra": {"official": "Aruba", "common": "Aruba"},
                "hrv": {"official": "Aruba", "common": "Aruba"},
                "ita": {"official": "Aruba", "common": "Aruba"},
                "jpn": {"official": "\u30a2\u30eb\u30d0", "common": "\u30a2\u30eb\u30d0"},
                "nld": {"official": "Aruba", "common": "Aruba"},
                "por": {"official": "Aruba", "common": "Aruba"},
                "rus": {"official": "\u0410\u0440\u0443\u0431\u0430", "common": "\u0410\u0440\u0443\u0431\u0430"},
                "slk": {"official": "Aruba", "common": "Aruba"},
                "spa": {"official": "Aruba", "common": "Aruba"},
                "fin": {"official": "Aruba", "common": "Aruba"},
                "est": {"official": "Aruba", "common": "Aruba"},
                "zho": {"official": "\u963F\u9C81\u5DF4", "common": "\u963F\u9C81\u5DF4"},
                "pol": {"official": "Aruba", "common": "Aruba"}
            },
            "latlng": [12.5, -69.96666666],
            "demonym": "Aruban",
            "landlocked": false,
            "borders": [],
            "area": 180,
            "flag": "\ud83c\udde6\ud83c\uddfc"
        },
        {
            "name": {
                "common": "Afghanistan",
                "official": "Islamic Republic of Afghanistan",
                "native": {
                    "prs": {
                        "official": "\u062c\u0645\u0647\u0648\u0631\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
                        "common": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
                    },
                    "pus": {
                        "official": "\u062f \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646 \u0627\u0633\u0644\u0627\u0645\u064a \u062c\u0645\u0647\u0648\u0631\u06cc\u062a",
                        "common": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
                    },
                    "tuk": {
                        "official": "Owganystan Yslam Respublikasy",
                        "common": "Owganystan"
                    }
                }
            },
            "tld": [".af"],
            "cca2": "AF",
            "ccn3": "004",
            "cca3": "AFG",
            "cioc": "AFG",
            "independent": true,
            "status": "officially-assigned",
            "currency": ["AFN"],
            "callingCode": ["93"],
            "capital": ["Kabul"],
            "altSpellings": ["AF", "Af\u0121\u0101nist\u0101n"],
            "region": "Asia",
            "subregion": "Southern Asia",
            "languages": {
                "prs": "Dari",
                "pus": "Pashto",
                "tuk": "Turkmen"
            },
            "translations": {
                "ces": {"official": "Afgh\u00e1nsk\u00e1 isl\u00e1msk\u00e1 republika", "common": "Afgh\u00e1nist\u00e1n"},
                "cym": {"official": "Gweriniaeth Islamaidd Affganistan", "common": "Affganistan"},
                "deu": {"official": "Islamische Republik Afghanistan", "common": "Afghanistan"},
                "fra": {"official": "R\u00e9publique islamique d'Afghanistan", "common": "Afghanistan"},
                "hrv": {"official": "Islamska Republika Afganistan", "common": "Afganistan"},
                "ita": {"official": "Repubblica islamica dell'Afghanistan", "common": "Afghanistan"},
                "jpn": {"official": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3\u00b7\u30a4\u30b9\u30e9\u30e0\u5171\u548c\u56fd", "common": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3"},
                "nld": {"official": "Islamitische Republiek Afghanistan", "common": "Afghanistan"},
                "por": {"official": "Rep\u00fablica Isl\u00e2mica do Afeganist\u00e3o", "common": "Afeganist\u00e3o"},
                "rus": {"official": "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d", "common": "\u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d"},
                "slk": {"official": "Afg\u00e1nsky islamsk\u00fd \u0161t\u00e1t", "common": "Afganistan"},
                "spa": {"official": "Rep\u00fablica Isl\u00e1mica de Afganist\u00e1n", "common": "Afganist\u00e1n"},
                "fin": {"official": "Afganistanin islamilainen tasavalta", "common": "Afganistan"},
                "est": {"official": "Afganistani Islamivabariik", "common": "Afganistan"},
                "zho": {"official": "\u963F\u5BCC\u6C57\u4F0A\u65AF\u5170\u5171\u548C\u56FD", "common": "\u963F\u5BCC\u6C57"},
                "pol": {"official": "Islamska Republika Afganistanu", "common": "Afganistan"}
            },
            "latlng": [33, 65],
            "demonym": "Afghan",
            "landlocked": true,
            "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
            "area": 652230,
            "flag": "\ud83c\udde6\ud83c\uddeb"
        }
        ]*/
  };

    //showCountries = (country,index) =>{
     //   return <CountryDisplay key ={index} {...country}/>
    //}  {paises.map(this.showCountries)}

    render() {

   const {paises} = this.state
      console.log(paises)
    return (

      <div>
          <NavLink activeClassName='ihatemyboss' exact to='/detail' >{paises.map((product, key)=><CountryDisplay {...product} key={key}/>)}</NavLink>

          <Routes/>


      </div>
    );
  }
}

export default withRouter(App);
