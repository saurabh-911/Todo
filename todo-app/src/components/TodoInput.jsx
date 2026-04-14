import { useState } from "react";

function TodoInput({ addTodo }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    addTodo({ title, category, dueDate });

    setTitle("");
    setCategory("");
    setDueDate("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
  <input
    placeholder="Enter task"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    placeholder="Category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  />

  <input
    type="date"
    value={dueDate}
    onChange={(e) => setDueDate(e.target.value)}
  />

  <button className="btn">Add Task</button>
</form>
  );
}

export default TodoInput;