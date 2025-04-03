function TodoItem({ todo, setTodos }) {
    const handleDelete = () => {
      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    };
  
    const toggleComplete = () => {
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
      );
    };
  
    return (
      <li>
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
        <button onClick={toggleComplete}>
          {todo.completed ? "Desfazer" : "Concluir"}
        </button>
        <button onClick={handleDelete}>🗑️</button>
      </li>
    );
  }
  
  export default TodoItem;