const TodoListItem = ({todo, onRemoveTodo}) => {
  return todo !== '' && <button onClick={() => onRemoveTodo(todo)} className="todo_item">{todo}</button>;
};

export default TodoListItem;
