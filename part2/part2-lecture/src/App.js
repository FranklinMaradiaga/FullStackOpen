import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  console.log('render', notes.length, 'notes');

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportance = (id) => {
    const note = notes.find( n =>  n.id === id )
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => {
          return note.id !== id ? note : returnedNote
        }))
      })
      .catch( (error) => {
        alert(
          `the note '${note.content}' was already deleted from the server`
        )
      })

  }

  const addNote= (event) => {
    event.preventDefault()
    
    const noteObject= {
      content: newNote,
      important: Math.random () < 0.5,
    }

    noteService
      .create(noteObject)
      .then( (returnedNote) => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })

  }

  return (
    <div className="App">
      
      <h1> Notes </h1>

      <div>
        <button onClick={ () => setShowAll(!showAll) } >
          Show { showAll ? 'important' : 'all' }
        </button>
      </div>

      <ul>
        {notesToShow.map( (note) =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
          />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input
          value= {newNote}
          onChange={ handleNoteChange }
        />
        <button type="submit"> Save </button>
      </form>

    </div>
  );
}

export default App;
