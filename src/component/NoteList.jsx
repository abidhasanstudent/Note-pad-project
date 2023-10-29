import React from "react";

function NoteList(props) {
  //remove button
  const removeHandler = (noteId) => {
    const newNotes = props.notes.filter((note) => note.id !== noteId);
    props.setNotes(newNotes);
  };

  // edit button
  const editHandler = (note) => {
    props.setEdit(true);
    props.setNotetitle(note.title);
    props.setUpdate(note);
  };
  return (
    <>
      <ul className="note-list">
        {props.notes.map((note) => (
          <li key={note.id} className="note-box">
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
