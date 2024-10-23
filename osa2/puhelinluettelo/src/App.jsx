import { useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  )
}

const People = ({persons, filter}) => {
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const people = namesToShow.map(person =>
      <Person name={person.name} number={person.number} key={person.name}/>
  )

  return (
    <div> 
      <h2>Numbers</h2>
      {people} 
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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameAdding = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber }
    if (persons.find(person => person.name === newName) === undefined) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
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
      <People persons={persons} filter={filter} />
    </div>
  )
}

export default App