import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
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

  const removeHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  const editHandler = (note) => {
    setUpdateMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  };
  const contextValue = {
    noteTitle,
    setNoteTitle,
    notes,
    setNotes,
    updateMode,
    setUpdateMode,
    editableNote,
    setEditableNote,
    createHandler,
    updateHandle,
    removeHandler,
    editHandler,
  };
  return (
    <NoteContext.Provider value={contextValue}>
        {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
