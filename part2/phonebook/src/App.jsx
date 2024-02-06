import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} success={success}/>
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <h3>Add a new contact</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
        setSuccess={setSuccess}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filter={filter}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
        setSuccess={setSuccess}
      />
    </div>
  )
}

export default App