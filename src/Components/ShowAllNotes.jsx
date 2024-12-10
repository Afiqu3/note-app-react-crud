import React from "react";
import { useContext } from "react";
import { NoteContext } from "../Contexts/Notes";

const ShowAllNotes = () => {
  const {notes, editHandler, removeHandler} = useContext(NoteContext);
  return (
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
  );
};

export default ShowAllNotes;
