import React from "react";

const NoteForm = (props) => {
  const createHandler = (event) => {
    event.preventDefault();
    if (!props.noteTitle) {
      return alert("Enter note title");
    }
    const newNote = {
      id: Date.now() + "",
      title: props.noteTitle,
    };
    props.setNotes([...props.notes, newNote]);
    props.setNoteTitle("");
  };
  const updateHandle = (event) => {
    event.preventDefault();
    const updateNotes = props.notes.map((note) => {
      if (note.id === props.editableNote.id) {
        return {
          ...note,
          title: props.noteTitle,
        };
      }
      return note;
    });
    props.setNotes(updateNotes);
    props.setUpdateMode(false);
    props.setEditableNote(null);
    props.setNoteTitle("");
  };
  return (
    <form onSubmit={props.updateMode ? updateHandle : createHandler}>
      <input
        type="text"
        value={props.noteTitle}
        onChange={(event) => props.setNoteTitle(event.target.value)}
      />
      <button type="submit">
        {props.updateMode ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
