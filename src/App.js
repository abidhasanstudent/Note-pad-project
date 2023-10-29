import "./App.css";
import { useState } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";

function App() {
  const [noteTitle, setNotetitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);

  return (
    <div className="container">
      <NoteForm
        edit={edit}
        notes={notes}
        update={update}
        setEdit={setEdit}
        setNotes={setNotes}
        noteTitle={noteTitle}
        setNotetitle={setNotetitle}
      />
      <NoteList
        notes={notes}
        setEdit={setEdit}
        setNotes={setNotes}
        setUpdate={setUpdate}
        setNotetitle={setNotetitle}
      />
    </div>
  );
}

export default App;
