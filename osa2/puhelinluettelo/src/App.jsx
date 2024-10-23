import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNameAdding = (event) => {
    event.preventDefault()
    const nameObject = { name: newName}
    setPersons(persons.concat(nameObject))
  }

  const numbers = persons.map(person =>
    <li key={person.name}>{person.name}</li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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