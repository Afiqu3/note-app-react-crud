import "./App.css";
import { useState } from "react";
import NoteForm from "./Components/NoteForm";
import ShowAllNotes from "./Components/ShowAllNotes";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  return (
    <div className="App">
      <NoteForm
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        notes={notes}
        setNotes={setNotes}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
      ></NoteForm>
      <ShowAllNotes
        notes={notes}
        setNotes={setNotes}
        setUpdateMode={setUpdateMode}
        setNoteTitle={setNoteTitle}
        setEditableNote={setEditableNote}
      ></ShowAllNotes>
    </div>
  );
}

export default App;
