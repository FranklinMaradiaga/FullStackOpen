import { useState, useEffect } from 'react'
import phonebookService from './services/the-phonebook'

function App() {

  const [ persons, setPersons ] = useState( [] )

  useEffect( () => {
    const promise = phonebookService.getAll()
    promise.then( (response) => {
      setPersons(response.data)
    })
  }, [])

  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")

  const [ newFilter,  setNewFilter ] = useState("")
  const [ filteredPersons, setFilteredPersons ] = useState([])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)

    const newFilteredPersons = persons.filter( (person) => {
      return person.name.toLowerCase().includes(newFilter.toLowerCase())
    } )

    setFilteredPersons(newFilteredPersons)
  }

  const handleDeleteNumber = (person) => {

    if (window.confirm(`Delete ${person.name}`)) {

      const newPersons = persons.filter(currPerson => currPerson.id !== person.id)
      setPersons(newPersons)

      phonebookService.deleteNumber(person.id)
      .then( (response) => {
        console.log(response);
      })
      .catch(error => {
        // In case of error, put the person back into the state
        setPersons(newPersons.concat(person));
        alert("Already deleted! Reload the page!")
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = { name: newName, number: newNumber }

    const checkIfExists = () => persons.some( (person) => person.name ===  newPerson.name)

    if (checkIfExists()) {
      alert(`${newPerson.name} is already added to the phonebook!`) // Display an alert message if name already exists!
      return // Exit the function to prevent further execution
    }

    phonebookService.create(newPerson)
      .then( (response) => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })
  }


  return (
    <div className="App">
      
      <h2> Phonebook! </h2>

      <div>
        filter shown with
        <input
          placeholder='Filter by...'
          value={ newFilter }
          onChange={ handleFilterChange }
        />
      </div>

      <h2> Add a new </h2>
      <form onSubmit={ addPerson }>

        <div>
          Name:
          <input 
            placeholder='Enter a name' 
            value={ newName }
            onChange={handleNameChange}
          />
        </div>

        <div>
          Number:
          <input 
              placeholder='Enter a phone number' 
              value={ newNumber }
              onChange={handleNumberChange}
            />
        </div>

        <div>
          <button type="submit"> add  </button>
        </div>

      </form>

      <h2> Numbers </h2>

      {newFilter ? (
        filteredPersons.map((person) => (
          <div key={person.id}>
            {`${person.name} ${person.number}`}
            <button onClick={ () => handleDeleteNumber(person) }> Delete </button>
          </div>
        ))
      ) : (
        persons.map((person) => (
          <div key={person.id}>
            {`${person.name} ${person.number}`}
            <button onClick={ () => handleDeleteNumber(person) }> Delete </button>
          </div>
        ))
      )}


    </div>
  );
}

export default App;
