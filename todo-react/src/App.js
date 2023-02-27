import "./App.css";
import AddTodo from "./components/AddTodo";
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = React.useCallback(todo => {
    setTodos(prev => [...prev, todo]);
  }, []);

  const handleRemoveTodo = React.useCallback(todo => {
    setTodos(todos => todos.filter(t => t !== todo));
  }, []);

  return (
    <div className="todo">
      <div className="todo__header">Todo in ReactJS</div>
      <div className="todo__display">
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList onRemoveTodo={handleRemoveTodo} todos={todos} />
      </div>
    </div>
  );
}

export default App;
