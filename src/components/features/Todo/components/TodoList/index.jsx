import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, idx) => (
          <li
            key={todo.id}
            className={classNames({
              "todo-item": true,
              completed: todo.status === "completed",
            })}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
