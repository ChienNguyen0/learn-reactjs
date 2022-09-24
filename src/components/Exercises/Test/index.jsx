import React, { useState } from "react";
import "./styles.scss";

Test.propTypes = {};

function Test(props) {
  const initTodoList = [
    {
      id: 1,
      name: "Y",
    },
    {
      id: 2,
      name: "A",
    },
    {
      id: 3,
      name: "P",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleRemoveName = (index) => {
    // clone into a new array
    const newTodoList = [...todoList];

    console.log(index);

    // handleRemoveTodo
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id} onClick={() => handleRemoveName(index)}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
