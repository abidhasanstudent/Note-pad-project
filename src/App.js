import "./App.css";
import { useState } from "react";
import NoteForm from "./component/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");
  return (
    <div className="App">
      <h1>Hello! Clean project folder and ready to set real version </h1>
      <NoteForm
        update={update}
        setEdit={setEdit}
        setNotes={setNotes}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
      />
    </div>
  );
}

export default App;
