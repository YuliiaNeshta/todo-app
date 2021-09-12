import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  // constructor() {
  //   super();

  //   this.onTodoItemClick = () => {
  //     console.log(`Done: ${this.props.label}`);
  //   };
  // }

  state = {
    done: false,
    important: false,
  };

  onTodoItemClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  onMarkImportant = () => {
    //destructuring state
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onTodoItemClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}