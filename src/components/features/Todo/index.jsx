import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "A",
      status: "new",
    },
    {
      id: 2,
      title: "B",
      status: "completed",
    },
    {
      id: 3,
      title: "C",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredTodoList, setFilteredTodoList] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    console.log(todo, idx);

    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // update todoList
    setTodoList(newTodoList);
  };

  // filter todoList
  const handleShowAll = () => {
    setFilteredTodoList("all");
  };

  const handleShowCompletedItem = () => {
    setFilteredTodoList("completed");
  };

  const handleShowNewItem = () => {
    setFilteredTodoList("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredTodoList === "all" || filteredTodoList === todo.status
  );

  return (
    <div>
      <h3>To do List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompletedItem}>Show completed item</button>
      <button onClick={handleShowNewItem}>Show new item</button>
    </div>
  );
}

export default TodoFeature;
