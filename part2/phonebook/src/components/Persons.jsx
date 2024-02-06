import personService from '../services/persons'

const Person = ({ person, deletePerson }) => {
    return (
      <div>
        {person.name} {person.number}
        <button onClick={deletePerson}>{'delete'}</button>
      </div>
    )
}

const Persons = ({persons, filter, setPersons}) => {

    const deletePerson = id => {
        const person = persons.find(n => n.id === id)
        if (window.confirm(`Delete ${person.name}`))
        {
            personService
                .deletePerson(id)
                .then(response => {
                    setPersons(persons.filter(n => n.id !== response.id))
                })
        }
      }

    const personsToShow =
        persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return(
    <div>
    {personsToShow.map(person =>
        <Person
          key={person.id}
          person={person}
          deletePerson={() => deletePerson(person.id)}
          />)}
    </div>
    )
}

export default Persons