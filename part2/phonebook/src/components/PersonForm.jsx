import personService from '../services/persons'

const PersonForm = ({newName, newNumber, setNewName, setNewNumber, persons, setPersons, setErrorMessage, setSuccess}) => {

    const addPerson = (event) => {
      event.preventDefault()
  
      if (persons.some(person => person.name === newName)) {
        if (window.confirm(`${newName} is already added to phonebook,
                            replace the old number with a new one?`))
        {
          const nameObject = {
            name: newName,
            number: newNumber,
          }
          const id = persons.find(person => person.name === newName).id
          personService
            .update(id, nameObject)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
              setNewName('')
              setNewNumber('')
              setErrorMessage(`${newName}'s phonenumber was changed`)
              setSuccess(true)
            })
            .catch(error => {
              setErrorMessage(
                `Information of ${newName} was already removed from server`
              )
              setSuccess(false)
              setTimeout(() => {
                setErrorMessage(null)
              }, 3000)
              setPersons(persons.filter(n => n.id !== id))
            })

          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        } else {
        setNewName('')
        setNewNumber('')
        }
      } else {
        const nameObject = {
          name: newName,
          number: newNumber,
        }
        personService
          .create(nameObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          })
        setErrorMessage(`Added ${newName}`)
        setSuccess(true)

        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }
    }

    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }

    return (
    <form onSubmit={addPerson}>
        <div>
        name: <input 
                value={newName}
                onChange={handleNameChange}
                />
        </div>
        <div>
        number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm