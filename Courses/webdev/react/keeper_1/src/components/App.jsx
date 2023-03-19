import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [noteList, setNoteList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function pushNote() {
    setNoteList((prevNotes) => {
      return [...prevNotes, note];
    });
    setNote(() => ({ title: "", content: "" }));
  }

  function deleteNote(id) {
    setNoteList((prevItems) => {
      console.log(prevItems);
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        titleValue={note.title}
        contentValue={note.content}
        pushNote={pushNote}
        onChange={handleChange}
      />
      {noteList.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          delete={deleteNote}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
