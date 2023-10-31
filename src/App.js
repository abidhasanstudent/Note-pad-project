import React, { useState } from "react";
import "./App.css";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import SearchNote from "./component/SearchNote";
import ViewOption from "./component/ViewOption";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [viewOption, setViewOption] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = () => {
    if (viewOption === "selected") {
      return notes
        .filter((note) => selectedNotes.includes(note.id))
        .filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    } else if (viewOption === "unselected") {
      return notes
        .filter((note) => !selectedNotes.includes(note.id))
        .filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
      <div className="features-section">
        <ViewOption viewOption={viewOption} setViewOption={setViewOption} />
        <SearchNote searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <NoteList
        notes={filteredNotes()}
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
