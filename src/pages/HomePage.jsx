import Navbar from '../components/Navbar'
import CountriesList from '../components/CountriesList'
import countries from '../data/countries.json'
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import CountryDetails from '../components/CountryDetails'

export default function HomePage(props) {

  const {countries} = props

  return (
    <div className="page">
      <CountriesList countries={countries}/>
    </div>
  )
}