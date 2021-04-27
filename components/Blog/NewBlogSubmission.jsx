import React, { useState } from "react";
import { Form, TextInput } from "./styled";
import { handleBlogSubmit } from "./utils";
import { Button } from "../ui/Styled";

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
    <Form onSubmit={() => handleBlogSubmit(title, content, date)}>
      <h1>Create a new blog post</h1>
      <div>
        <label>Title</label>
        <TextInput
          type="text"
          value={title}
          onChange={handleTitleChange}
        ></TextInput>
      </div>
      <div>
        <label>Content</label>
        <TextInput
          type="text"
          value={content}
          onChange={handleContentChange}
        ></TextInput>
      </div>
      <div>
        <label>Date</label>
        <TextInput
          type="date"
          value={date}
          onChange={handleDateChange}
        ></TextInput>
      </div>
      <Button primary type="submit" value="Submit">
        Submit
      </Button>
    </Form>
  );
}
