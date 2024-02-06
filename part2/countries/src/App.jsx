import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import Weather from './components/Weather'
import countryServices from './services/countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countryServices
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const countriesToShow =
    countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
  useEffect(() => {
    if (countriesToShow.length == 1){
      countryServices
        .getWeather(countriesToShow[0].capitalInfo.latlng[0], countriesToShow[0].capitalInfo.latlng[1])
        .then(returnedWeather => {
          setWeather(returnedWeather)
      })
    }
  }, [filter])

  return (
    <div>
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <Countries
        countries={countriesToShow}
        setFilter={setFilter}
      />
      <Weather
        countries={countriesToShow}
        weather={weather}
      />
    </div>
  )
}

export default App
