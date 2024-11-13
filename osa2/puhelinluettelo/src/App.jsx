import { useEffect, useState } from 'react'
import personService from './services/persons'

const Person = ({ name, number, handleDeletingName }) => {
  return (
    <div>
      {name} {number} <button type='submit' onClick={handleDeletingName}>delete</button>
    </div>
  )
}

const FilterForm = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

const NewPersonForm = ({ newName, handleNameAdding, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form>
        <div>
          <h2>add a new</h2>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleNameAdding}>add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456789' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletingName = (id) => {
    const deletedOne = persons.find((person) => person.id == id)
    if (window.confirm(`Delete ${deletedOne.name}?`)) {
      personService
        .deleteOne(id)
        .then(response => {
          const newPersons = persons.filter(person => person.id !== id)
          setPersons(newPersons)
        })
    }
  }

  const handleNameAdding = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber }
    if (persons.find(person => person.name === newName) === undefined) {
      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const oldPerson = persons.find(person => person.name === newName)
        const changedPerson = { ...oldPerson, number: newNumber }
        personService
          .update(changedPerson)
          .then(response => {
            personService
            .getAll()
            .then(response => {
              setPersons(response.data)
              setNewName('')
              setNewNumber('')
            })
          })
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filter={filter} handleFilterChange={handleFilterChange} />
      <NewPersonForm 
        newName={newName} 
        handleNameAdding={handleNameAdding} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
      />
      <ul>
        {namesToShow.map(person =>
          <Person 
            name={person.name} 
            number={person.number} 
            key={person.name} 
            handleDeletingName={() => handleDeletingName(person.id)} 
          />
        )}
      </ul>
    </div>
  )
}

export default App