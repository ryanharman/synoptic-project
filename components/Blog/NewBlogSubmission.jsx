import React, { useState } from "react";
import { handleBlogSubmit } from "./utils";

export default function NewBlogSubmission() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  return (
    <form onSubmit={() => handleBlogSubmit(title, content, date)}>
      <div>
        <label>
          Title
          <input type="text" value={title} onChange={handleTitleChange}></input>
        </label>
        <label>
          Content
          <textarea
            type="text"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </label>
        <label>
          Date
          <input type="date" value={date} onChange={handleDateChange}></input>
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  );
}
