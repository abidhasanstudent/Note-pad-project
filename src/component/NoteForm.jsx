// NoteForm.js
import React from "react";

function NoteForm(props) {
  const createHandler = (event) => {
    event.preventDefault();
    if (!props.noteTitle) {
      return alert("Please Enter Note Title");
    }
    const newNote = {
      id: Date.now() + "",
      title: props.noteTitle,
    };
    props.setNoteTitle("");
    props.setNotes([...props.notes, newNote]);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const updatedNoteArray = props.notes.map((note) => {
      if (note.id === props.update.id) {
        return { ...note, title: props.noteTitle };
      } else {
        return note;
      }
    });
    props.setEdit(false);
    props.setNoteTitle("");
    props.setNotes(updatedNoteArray);
  };

  return (
    <>
      <form
        onSubmit={props.edit ? updateHandler : createHandler}
        className="form"
      >
        <input
          type="text"
          className="input-field"
          value={props.noteTitle}
          onChange={(event) => {
            props.setNoteTitle(event.target.value);
          }}
        />
        <button type="submit" className="submit-btn">
          {props.edit ? "Update Note" : "Add Note"}
        </button>
      </form>
    </>
  );
}

export default NoteForm;
