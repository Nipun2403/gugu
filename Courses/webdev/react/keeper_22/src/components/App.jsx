import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Note";
import notesEntry from "../notes";

const createNotes = notesEntry.map((note) => (
  <Notes key={note.key} title={note.title} content={note.content} />
));

function App() {
  return (
    <div>
      <Header />
      {createNotes}
      <Footer />
    </div>
  );
}

export default App;
