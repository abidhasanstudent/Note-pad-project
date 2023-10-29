import React from "react";

function NoteForm(props) {
  // create handler
  const createHandler = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now() + "",
      title: props.noteTitle,
    };
    props.setNotes([...props.notes, newNote]);
    props.setNoteTitle("");
  };
  // update handler
  const updateHandler = (event) => {
    event.preventDefault();
    const updateNotes = props.notes.map((note) => {
      if (note.id === props.update.id) {
        return { ...note, title: props.noteTitle };
      } else {
        return note;
      }
    });
    props.setEdit(false);
    props.setNoteTitle("");
    props.setNotes(updateNotes);
  };
  return (
    <>
      <form onSubmit={props.edit ? updateHandler : createHandler}>
        <input
          type="text"
          value={props.noteTitle}
          onChange={(event) => {
            props.setNoteTitle(event.target.value);
          }}
        />
        {console.log(props.noteTitle)}
        <button>Add note</button>
      </form>
    </>
  );
}

export default NoteForm;
