import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onRemoveTodo}) => {
  return (
    <div className="todo_list">
      {
        todos.length !== 0 ? todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} onRemoveTodo={onRemoveTodo} />
          ))
          :
          (
            <div className="todo_list__no_item">You don't have any work pending!</div>
          )
      }
    </div>
  );
};

export default TodoList;
