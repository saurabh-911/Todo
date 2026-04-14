import { useState } from "react";

function TodoInput({ addTodo }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTodo({
      title: title.trim(),
      category: category.trim(),
      dueDate,
    });

    setTitle("");
    setCategory("");
    setDueDate("");
  };

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <div className="composer__intro">
        <p className="section-label">Create note</p>
        <h3>Pin a fresh task to the wall</h3>
      </div>

      <div className="composer__grid">
        <input
          aria-label="Task title"
          placeholder="What needs to happen?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          aria-label="Task category"
          placeholder="List or category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <input
          aria-label="Due date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        <button className="btn" type="submit">
          Add Note
        </button>
      </div>
    </form>
  );
}

export default TodoInput;
