const Language = ({language}) => {
    return (
      <li>{language[1]}</li>
    )
}

const Name = ({ name, filterCountries }) => {
    return (
      <div>
        {name.common}
        <button onClick={filterCountries}>{'show'}</button>
      </div>
    )
}

const Countries = ({countries, setFilter}) => {

    const filterCountries = name => {
        setFilter(name)    
    }

    if (countries.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    }
    else if (countries.length === 1){
      return (
        <>
          <h2>
            {countries[0].name.common}
          </h2>
          <div>capital {countries[0].capital}</div>
          <div>area {countries[0].area}</div>
          <h4>languages:</h4>
          <ul>
            {Object.entries(countries[0].languages).map(language =>
              <Language key={language[0]} language={language} />)}
          </ul>
          <img src={countries[0].flags.png}/>
        </>
      )
    } else {
      return (
    <div>
    {countries.map(country =>
      <Name
        key={country.name.common}
        name={country.name}
        filterCountries={() => filterCountries(country.name.common)}
      />)}
      </div>)
    }
  }

  export default Countries