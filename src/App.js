import "./App.css";
import { useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const createHandler = (event) => {
    event.preventDefault();
    if (!noteTitle) {
      return alert("Enter note title");
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  const removeHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  const editHandler = (note) => {
    setUpdateMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  };

  const updateHandle = (event) => {
    event.preventDefault();
    const updateNotes = notes.map((note) => {
      if (note.id === editableNote.id) {
        return {
          ...note,
          title: noteTitle,
        };
      }
      return note;
    });
    setNotes(updateNotes);
    setUpdateMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  return (
    <div className="App">
      <form onSubmit={updateMode ? updateHandle : createHandler}>
        <input
          type="text"
          value={noteTitle}
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <button type="submit">{updateMode ? "Update Note" : "Add Note"}</button>
      </form>
      <div>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <span>{note.title}</span>
              <button onClick={() => editHandler(note)}>Edit</button>
              <button onClick={() => removeHandler(note.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
