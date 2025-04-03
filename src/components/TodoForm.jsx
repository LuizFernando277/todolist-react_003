import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ setTodos }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTodos((prev) => [...prev, { id: uuidv4(), text: task, completed: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Nova tarefa..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;