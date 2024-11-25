import { useState, useEffect } from 'react'
import './App.css'
import countryService from './services/country'

const Matches = ({ matches, search, handleShow }) => {
  if (search == '') {
    return (
      null
    )
  }

  if (matches.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }

  return (
    <div>
      {matches.map(country =>
        <div key={country.common}>
          {country.common} 
          <button type='submit' onClick={(() => handleShow(country))}>show</button>
        </div>
      )}
    </div>
  )
}

const CountryInfo = ({ theCountry }) => {
  if (!theCountry) {
    return null
  } else if (theCountry) {
    return (
      <div>
        <h2>{theCountry.name.common}</h2>
        capital: {theCountry.capital}
        <br/>
        area: {theCountry.area}
        <h3>languages:</h3>
        {Object.keys(theCountry.languages).map(key =>
          <p key={key}>{theCountry.languages[key]}</p>
        )}
        <img src={theCountry.flags.png} alt={'flag'} />
      </div>
    )
  } else {
    return null
  }
}

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [theCountry, setTheCountry] = useState(null)

  const countriesToShow = countries.filter(country => country.common.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        const newCountries = response.data.map(country => country.name)
        setCountries(newCountries)
      })
  }, [])

  useEffect(() => {
    if (search && countriesToShow.length === 1) {
      const searchedCountry = countries.find(country => country.common.toLowerCase() == countriesToShow[0].common.toLowerCase())
      if (searchedCountry) {
        countryService
          .getCountry(countriesToShow[0].common)
          .then(response => {
            setTheCountry(response.data)
          })
      }
    } else {
      setTheCountry(null)
    }
  }, [search])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleShow = (country) => {
    countryService
      .getCountry(country.common)
      .then(response => {
        setTheCountry(response.data)
      })
  }

    return (
      <>
        <div>
          <h1>Country search</h1>
          find countries <input value={search} onChange={handleSearch} />
          <Matches matches={countriesToShow} search={search} handleShow={handleShow}/>
          <CountryInfo theCountry={theCountry} />
        </div>
      </>
    )
}

export default App
