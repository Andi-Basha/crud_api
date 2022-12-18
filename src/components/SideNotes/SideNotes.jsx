import React, { useState } from "react";
import { AddNote } from "./AddNote";
import { Note } from "./Note";
import useNoteContext from "../../lib/hooks/useNoteContext";

export const SideNotes = () => {
  const [showForm, setShowForm] = useState(false);
  const { notes, removeNote } = useNoteContext();

  return (
    <div className="SideNotes">
      {!showForm && (
        <button
          className="btn btn-secondary m-3"
          onClick={() => setShowForm((prevState) => !prevState)}
        >
          Add New Note
        </button>
      )}
      {showForm && (
        <AddNote onHideForm={() => setShowForm((prevState) => !prevState)} />
      )}
      {notes &&
        notes.map((note) => (
          <Note
            key={`note-${note.id}`}
            note={note}
            onRemoveNote={() => removeNote(note.id)}
          />
        ))}
    </div>
  );
};
