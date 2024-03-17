import React from "react";

const Todo = ({ todo, removeTodo, completedTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.IsCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>

      <div className="butons">
        <button className="complete" onClick={() => completedTodo(todo.id)}>
          Completar
        </button>
        <button onClick={() => removeTodo(todo.id)} className="remove">
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Todo;
