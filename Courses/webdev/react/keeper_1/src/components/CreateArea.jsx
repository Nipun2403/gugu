import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={(event) => {
            props.onChange(event);
          }}
          name="title"
          placeholder="Title"
          value={props.titleValue}
        />
        <textarea
          onChange={(event) => {
            props.onChange(event);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.contentValue}
        />
        <button
          onClick={() => {
            props.pushNote();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
