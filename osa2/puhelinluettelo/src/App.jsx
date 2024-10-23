import { useState } from 'react'

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

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const numbers = namesToShow.map(person =>
      <li key={person.name}>{person.name} {person.number}</li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter <input value={filter} onChange={handleFilterChange}/></div>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleNameAdding}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbers}
    </div>
  )

}

export default App