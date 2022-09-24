import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const [todoList, setTodoList] = useState([
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
  ]);
  const [filteredTodoList, setFilteredTodoList] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // // *line-thought todoItem when click
    // // clone current array to the new one
    // const newTodoList = [...todoList];
    // console.log(todo, idx);
    // //toggle state
    // newTodoList[idx] = {
    //   ...newTodoList[idx],
    //   status: newTodoList[idx].status === "new" ? "completed" : "new",
    // };
    // // update todoList
    // setTodoList(newTodoList);
    // *remove todoItem when click
    console.log(todo);
    // findIndex
    const index = todoList.findIndex((x) => x.id === todo.id);
    //check condition
    if (index < 0) return;
    // clone current array into a new one
    const newTodoList = [...todoList];
    // remove todoItem
    newTodoList.splice(index, 1);
    // setTodoList
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

  const handleTodoFormSubmit = (formValues) => {
    console.log("formValues", formValues);

    // add new todoItem to current todoList
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    // clone to a new one
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>React hooks - To do List</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompletedItem}>Show completed item</button>
      <button onClick={handleShowNewItem}>Show new item</button>
    </div>
  );
}

export default TodoFeature;
