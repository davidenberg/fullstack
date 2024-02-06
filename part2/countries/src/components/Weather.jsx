import countryService from '../services/countries'

const Weather = ({countries, weather}) => {
    if (countries.length !== 1 ||
        !weather){
        return null
    }

    return(
    <>
        <h3>Weather in {countries[0].capital}</h3>
        <div>temperature {weather.main.temp} Celcius</div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
        <div>Wind {weather.wind.speed} m/s</div>
    </>
    )
}

export default Weather