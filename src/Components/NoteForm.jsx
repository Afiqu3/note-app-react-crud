import React from "react";
import { useContext } from "react";
import { NoteContext } from "../Contexts/Notes";

const NoteForm = () => {
  const noteCtx = useContext(NoteContext);
  return (
    <form onSubmit={noteCtx.updateMode ? noteCtx.updateHandle : noteCtx.createHandler}>
      <input
        type="text"
        value={noteCtx.noteTitle}
        onChange={(event) => noteCtx.setNoteTitle(event.target.value)}
      />
      <button type="submit">
        {noteCtx.updateMode ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
