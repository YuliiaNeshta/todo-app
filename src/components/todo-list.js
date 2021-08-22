import React from "react";

import TodoListItem from "./todo-list-item";
import './todo-list.css'

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...propsItem } = item;

    return (
      <li className="list-group-item" key={item.id}>
        <TodoListItem {...propsItem} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;


