import React from "react";

const ShowAllNotes = (props) => {
  const removeHandler = (noteId) => {
    const newNotes = props.notes.filter((note) => note.id !== noteId);
    props.setNotes(newNotes);
  };

  const editHandler = (note) => {
    props.setUpdateMode(true);
    props.setNoteTitle(note.title);
    props.setEditableNote(note);
  };

  return (
    <div>
      <ul>
        {props.notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllNotes;
