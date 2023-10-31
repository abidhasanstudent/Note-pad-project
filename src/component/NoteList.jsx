import React from "react";

function NoteList(props) {
  const removeHandler = (noteId) => {
    const newNotes = props.notes.filter((note) => note.id !== noteId);
    props.setNotes(newNotes);
  };

  const editHandler = (note) => {
    props.setEdit(true);
    props.setUpdate(note);
    props.setNoteTitle(note.title);
  };

  const toggleNoteSelection = (noteId) => {
    if (props.selectedNotes.includes(noteId)) {
      props.setSelectedNotes(props.selectedNotes.filter((id) => id !== noteId));
    } else {
      props.setSelectedNotes([...props.selectedNotes, noteId]);
    }
  };

  return (
    <>
      <ul className="note-list">
        {props.notes.map((note) => (
          <li key={note.id} className="note-box">
            <input
              type="checkbox"
              checked={props.selectedNotes.includes(note.id)}
              onChange={() => toggleNoteSelection(note.id)}
            />
            <span>{note.title}</span>
            <div className="note-btn">
              <button
                onClick={() => {
                  editHandler(note);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  removeHandler(note.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NoteList;
