import React from "react";

const AddTodo = ({onAddTodo}) => {
  const [todo, setTodo] = React.useState("");

  const handleAddTodo = React.useCallback(() => {
    if (todo === "") return alert("The todo can't be empty");
    onAddTodo(todo);
  }, [todo]);

  const handleTodoChange = React.useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  return (
    <div className="add_todo">
      <textarea rows={6} placeholder="Complete this React tutorial" value={todo} onChange={handleTodoChange}></textarea>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
