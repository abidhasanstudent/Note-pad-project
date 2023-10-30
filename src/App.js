// App.js

import "./App.css";
import { useState } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [viewOption, setViewOption] = useState("all"); // Default to "All Notes"

  // Filter notes based on the selected view option
  const filteredNotes = () => {
    if (viewOption === "selected") {
      return notes.filter((note) => selectedNotes.includes(note.id));
    } else if (viewOption === "unselected") {
      return notes.filter((note) => !selectedNotes.includes(note.id));
    }
    return notes;
  };

  return (
    <div className="container">
      <NoteForm
        edit={edit}
        notes={notes}
        update={update}
        setEdit={setEdit}
        setNotes={setNotes}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
      />
      <div>
        <label>
          View Option:
          <select
            value={viewOption}
            onChange={(e) => setViewOption(e.target.value)}
          >
            <option value="all">All Notes</option>
            <option value="selected">Selected Notes</option>
            <option value="unselected">Unselected Notes</option>
          </select>
        </label>
      </div>
      <NoteList
        notes={filteredNotes()} // Pass filtered notes to NoteList
        setEdit={setEdit}
        setNotes={setNotes}
        setUpdate={setUpdate}
        setNoteTitle={setNoteTitle}
        selectedNotes={selectedNotes}
        setSelectedNotes={setSelectedNotes}
      />
    </div>
  );
}

export default App;
